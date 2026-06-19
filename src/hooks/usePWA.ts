import { useState, useEffect } from "react";

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function usePWA() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingSW, setWaitingSW] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    // 1. Detect Standalone Display Mode
    const checkIsInstalled = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
      const isIOSStandalone = (navigator as any).standalone === true;
      setIsInstalled(isStandalone || isIOSStandalone);
    };

    checkIsInstalled();
    window.matchMedia("(display-mode: standalone)").addEventListener("change", checkIsInstalled);

    // 2. Listen for 'beforeinstallprompt' Event
    const handleInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      console.log("[PWA Hook] beforeinstallprompt captured. App is installable.");
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    // 3. Listen for completed installation
    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      setIsInstalled(true);
      console.log("[PWA Hook] App installed successfully!");
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    // 4. Register Service Worker & Listen for Updates
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/service-worker.js")
        .then((registration) => {
          console.log("[PWA Hook] Service Worker registered:", registration.scope);

          // If there is already an active service worker waiting, show the prompt
          if (registration.waiting) {
            setWaitingSW(registration.waiting);
            setUpdateAvailable(true);
          }

          // Listen for subsequent updates
          registration.addEventListener("updatefound", () => {
            const installingSW = registration.installing;
            if (installingSW) {
              installingSW.addEventListener("statechange", () => {
                if (installingSW.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                    // There is an existing active SW, meaning this is a newly installed background update
                    setWaitingSW(registration.waiting || installingSW);
                    setUpdateAvailable(true);
                    console.log("[PWA Hook] Strategic background update ready.");
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error("[PWA Hook] Service Worker registration failed:", error);
        });

      // Reload the page when the controller changes (due to SKIP_WAITING)
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.matchMedia("(display-mode: standalone)").removeEventListener("change", checkIsInstalled);
    };
  }, []);

  // Trigger browser install sequence
  const installApp = async () => {
    if (!deferredPrompt) {
      console.warn("[PWA Hook] Install prompt is not available.");
      return false;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      console.log(`[PWA Hook] User prompt resolve choice: ${choiceResult.outcome}`);
      
      setDeferredPrompt(null);
      setIsInstallable(false);
      
      return choiceResult.outcome === "accepted";
    } catch (err) {
      console.error("[PWA Hook] Installation sequence crashed:", err);
      return false;
    }
  };

  // Skip waiting to force activate new version
  const updateApp = () => {
    if (waitingSW) {
      console.log("[PWA Hook] Dispatching SKIP_WAITING event to activate new service worker.");
      waitingSW.postMessage({ type: "SKIP_WAITING" });
    } else {
      // Emergency fall-back reload
      window.location.reload();
    }
  };

  return {
    isInstallable,
    isInstalled,
    updateAvailable,
    installApp,
    updateApp,
  };
}
