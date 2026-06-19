import React, { useState, useEffect } from "react";
import { usePWA } from "../hooks/usePWA";
import { Download, X, RefreshCw, WifiOff, Share2, PlusSquare, Smartphone, Monitor, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function PWAInstallController() {
  const { isInstallable, isInstalled, updateAvailable, installApp, updateApp } = usePWA();
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [deviceOS, setDeviceOS] = useState<"android" | "ios" | "desktop" | "unknown">("unknown");

  // Monitor connection states
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    const handleTriggerEvent = () => {
      setShowModal(true);
    };
    window.addEventListener("trigger-pwa-install-dialog", handleTriggerEvent);

    // Detect visitor operating system
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceOS("ios");
    } else if (/android/.test(userAgent)) {
      setDeviceOS("android");
    } else {
      setDeviceOS("desktop");
    }

    // Delay banner presentation slightly for better user retention
    const timer = setTimeout(() => {
      // Show the banner if the app is not currently running in standalone,
      // and has not been closed in the active session
      const bannerDismissed = sessionStorage.getItem("pwa-banner-dismissed") === "true";
      if (!isInstalled && !bannerDismissed) {
        setShowBanner(true);
      }
    }, 2500);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("trigger-pwa-install-dialog", handleTriggerEvent);
      clearTimeout(timer);
    };
  }, [isInstalled]);

  const handleDismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("pwa-banner-dismissed", "true");
  };

  const handleTriggerInstall = async () => {
    if (deviceOS === "ios") {
      // iOS doesn't support the native beforeinstallprompt, so we present custom styled guidelines
      setShowModal(true);
    } else {
      // Trigger standard browser native or fallback prompt
      const result = await installApp();
      if (result) {
        setShowBanner(false);
      } else {
        // Fallback: open manual guidance modal if install fails or prompt is consumed
        setShowModal(true);
      }
    }
  };

  // Do not clutter if installed and online and updated
  return (
    <>
      <AnimatePresence>
        {/* Offline Status Sticky Banner (Requirement 5 & 13) */}
        {!isOnline && (
          <motion.div
            id="pwa-offline-alert"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 inset-x-0 z-[999999] bg-[#cc1a2f] text-white px-4 py-2.5 flex items-center justify-center gap-2 shadow-lg text-xs md:text-sm font-medium tracking-wide"
          >
            <WifiOff className="w-4 h-4 animate-pulse shrink-0" />
            <span>You are currently operating offline. System data is safeguarded in local relational cache buffers.</span>
          </motion.div>
        )}

        {/* Automatic Software Version Updater Toast (Requirement 6) */}
        {updateAvailable && (
          <motion.div
            id="pwa-update-toast"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed bottom-6 left-6 z-[99990] max-w-sm w-[calc(100vw-48px)] bg-neutral-950 text-white rounded-xl border border-neutral-800 p-4 shadow-2xl flex flex-col gap-3"
          >
            <div className="flex gap-2">
              <div className="p-2.5 bg-[#cc1a2f]/10 rounded-lg text-[#cc1a2f] shrink-0 h-fit">
                <RefreshCw className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-100 tracking-tight">New version available</h4>
                <p className="text-xs text-neutral-400 mt-1">Eurosia Buildnex has deployed a security and stability patch background update.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={updateApp}
                className="flex-1 bg-[#cc1a2f] text-white py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#a81423] transition-all"
              >
                Update Now
              </button>
            </div>
          </motion.div>
        )}

        {/* Floating Download Launcher (Requirement 1 & 9) */}
        {!isInstalled && (isInstallable || deviceOS === "ios") && (
          <motion.button
            id="pwa-floating-trigger"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleTriggerInstall}
            className="fixed bottom-6 right-6 z-[9999] bg-[#cc1a2f] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group hover:bg-[#a81423] transition-all border border-[#ea3246]/20"
            title="Install eurosia buildnex app"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold uppercase tracking-wider text-[11px] leading-none whitespace-nowrap pl-0 group-hover:pl-2">
              Install App
            </span>
          </motion.button>
        )}

        {/* Standalone Installation Action Banner (Requirement 10) */}
        {showBanner && !isInstalled && (isInstallable || deviceOS === "ios") && (
          <motion.div
            id="pwa-bottom-banner"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 inset-x-0 z-[9995] bg-neutral-950 border-t border-neutral-800 shadow-2xl px-4 py-4 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto md:mb-4 md:rounded-2xl md:inset-x-4 md:border"
          >
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Eurosia Buildnex logo"
                className="w-12 h-12 rounded-xl object-contain bg-[#050505] p-2 border border-neutral-800 shrink-0 shadow-lg"
              />
              <div>
                <h4 className="text-sm font-extrabold text-neutral-100 uppercase tracking-wider">
                  eurosia buildnex
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Install the enterprise smart construction workspace directly onto your device.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleTriggerInstall}
                className="flex items-center gap-1.5 bg-[#cc1a2f] text-white py-2.5 px-5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#a81423] transition-all shadow-lg active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Install App</span>
              </button>
              <button
                onClick={handleDismissBanner}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors border border-neutral-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Detailed Modal Guidance Sheet (Requirement 1, 7 & 8) */}
        {showModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 bg-neutral-900 border border-neutral-800 text-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="relative px-6 pt-6 pb-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.svg" alt="Buildnex" className="w-8 h-8 p-1.5 bg-[#050505] border border-neutral-800 rounded-lg" />
                  <h3 className="text-sm font-extrabold text-neutral-100 uppercase tracking-widest">Install App</h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-5">
                {deviceOS === "ios" ? (
                  // iOS Safari Custom Guidance Sheet
                  <div className="space-y-4">
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Apple iOS Safari does not support automated installations. You can easily install <strong className="text-white font-semibold">eurosia buildnex</strong> manually like a native app in 3 quick touches:
                    </p>
                    
                    <div className="space-y-3 bg-neutral-950/50 p-4 rounded-xl border border-neutral-800">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cc1a2f]/10 text-[#cc1a2f] text-xs font-extrabold shrink-0">
                          1
                        </div>
                        <p className="text-xs text-neutral-300 pt-0.5">
                          Tap the <strong className="text-[#3b82f6] inline-flex items-center gap-0.5 font-bold"><Share2 className="w-3.5 h-3.5 inline" /> Share</strong> icon located in your Safari navigation panel.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cc1a2f]/10 text-[#cc1a2f] text-xs font-extrabold shrink-0">
                          2
                        </div>
                        <p className="text-xs text-neutral-300 pt-0.5">
                          Scroll down the system sheet options list and select <strong className="text-white font-bold"><PlusSquare className="w-3.5 h-3.5 inline text-neutral-400" /> Add to Home Screen</strong>.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cc1a2f]/10 text-[#cc1a2f] text-xs font-extrabold shrink-0">
                          3
                        </div>
                        <p className="text-xs text-neutral-300 pt-0.5">
                          Tap <strong className="text-[#3b82f6] font-bold">Add</strong> at the top right to complete compiling the native runtime environment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 text-xs leading-relaxed">
                      <Info className="w-4 h-4 shrink-0" />
                      <span>Once installed, the browser frame hides entirely, and Eurosia Buildnex runs standalone with offline persistence.</span>
                    </div>
                  </div>
                ) : (
                  // Android / Desktop Fallback Guidance
                  <div className="space-y-4">
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Ensure your system and browser client support progressive web installations. For compatibility:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-neutral-950/40 p-3 rounded-lg border border-neutral-800/80">
                        <Smartphone className="w-5 h-5 text-neutral-400" />
                        <div>
                          <h5 className="text-[11px] font-bold text-neutral-300 uppercase tracking-widest">Mobile Browsers</h5>
                          <p className="text-[11px] text-neutral-500 mt-0.5">Google Chrome, Edge, Samsung Browser support immediate installing from prompts.</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-neutral-950/40 p-3 rounded-lg border border-neutral-800/80">
                        <Monitor className="w-5 h-5 text-neutral-400" />
                        <div>
                          <h5 className="text-[11px] font-bold text-neutral-300 uppercase tracking-widest">Desktop Browsers</h5>
                          <p className="text-[11px] text-neutral-500 mt-0.5">Chrome, Microsoft Edge, and Opera show an install icon inside the URL address bar.</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={async () => {
                        const success = await installApp();
                        if (success) setShowModal(false);
                      }}
                      className="w-full bg-[#cc1a2f] text-white py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-[#a81423] transition-all shadow-lg mt-2"
                    >
                      Trigger Native Prompts
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
