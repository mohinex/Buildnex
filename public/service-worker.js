const CACHE_VERSION = 'v1.0.2';
const STATIC_CACHE = `eurosia-buildnex-static-${CACHE_VERSION}`;
const IMAGE_CACHE = `eurosia-buildnex-images-${CACHE_VERSION}`;
const API_CACHE = `eurosia-buildnex-api-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/logo.svg',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/maskable-icon-512x512.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[Service Worker] Pre-caching static assets and offline recovery board');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== STATIC_CACHE &&
            cacheName !== IMAGE_CACHE &&
            cacheName !== API_CACHE
          ) {
            console.log('[Service Worker] Deleting obsolete cache store:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event with strategic routing
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Prevent caching anything that is not a GET request
  if (request.method !== 'GET') {
    return;
  }

  // Hook for API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Hook for images (from Unsplash or corporate domain)
  if (
    request.destination === 'image' ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.svg')
  ) {
    event.respondWith(handleImageRequest(request));
    return;
  }

  // Default Stale-While-Revalidate pattern for HTML/JS/CSS assets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Return cached immediately if found, but fetch fresh background update
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, cacheCopy);
            });
          }
          return networkResponse;
        })
        .catch((err) => {
          console.log('[Service Worker] Network error while fetching asset:', err);
          // If a page navigation request fails completely offline, deliver the offline HTML template
          if (request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });

      return cachedResponse || fetchPromise;
    })
  );
});

// Network-First, Cache-Fallback API caching implementation (fresh values by default)
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    // Secure cache update only if status is 200
    if (networkResponse.status === 200) {
      const cacheCopy = networkResponse.clone();
      const cache = await caches.open(API_CACHE);
      await cache.put(request, cacheCopy);
    }
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] API Network unreachable. Falling back to local cache.');
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return custom small JSON failure structure to client rather than throwing error
    return new Response(
      JSON.stringify({
        error: "Network unavailable. Operating in local-mode.",
        offline: true,
        data: []
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Cache-First, Network fallback for static images
async function handleImageRequest(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200 || networkResponse.status === 0) {
      const cacheCopy = networkResponse.clone();
      const cache = await caches.open(IMAGE_CACHE);
      await cache.put(request, cacheCopy);
    }
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] Failed to load image offline.');
    // If it's a critical missing brand logo, fallback to local logo.svg
    if (request.url.includes('logo')) {
      return caches.match('/logo.svg');
    }
    // Throw standard offline fetch error
    throw error;
  }
}

// Support push notifications listener structure (Requirement 11)
self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: 'Eurosia Buildnex Update', body: event.data.text() };
    }
  }

  const title = data.title || 'Eurosia Buildnex System Alert';
  const options = {
    body: data.body || 'New milestone advance signed by project managers.',
    icon: '/icon-192x192.png',
    badge: '/favicon-32x32.png',
    vibrate: [100, 50, 100],
    data: {
      primaryKey: 1,
      clickUrl: data.clickUrl || '/'
    },
    actions: [
      { action: 'explore', title: 'Open Workspace' },
      { action: 'close', title: 'Dismiss' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Support Push Notifications interaction callback (Requirement 11)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action !== 'close') {
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
        const destination = event.notification.data?.clickUrl || '/';
        // If empty window exists focused, take it there. Else open new tab.
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url === destination && 'focus' in client) {
            return client.focus();
          }
        }
        if (self.clients.openWindow) {
          return self.clients.openWindow(destination);
        }
      })
    );
  }
});

// Message Event Listener for update triggers (Requirement 6)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
