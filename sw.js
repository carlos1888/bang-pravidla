// BANG! Rules & Encyclopedia Service Worker (PWA Offline Support)
const CACHE_NAME = 'bang-pravidla-v17';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/cards-data.js',
  './js/rules-data.js',
  './js/faq-data.js',
  './js/turn-helper-data.js',
  './js/tools-data.js',
  './js/app.js',
  './assets/bang-logo.webp',
  './assets/bang-logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/audio/gunshot.mp3',
  './assets/audio/ricochet.m4a',
  './assets/audio/dynamite.m4a',
  './assets/audio/beer.m4a',
  './assets/audio/church_bell.m4a',
  './assets/audio/steam_train.m4a',
  './assets/audio/coins.m4a',
  './assets/audio/whip.m4a',
  './assets/audio/horse.m4a',
  './assets/audio/saloon_piano.m4a',
  './assets/audio/wilhelm.m4a',
  './assets/audio/gatling.m4a',
  './assets/audio/indians.m4a',
  './assets/audio/rattlesnake.m4a',
  './assets/audio/jail.m4a',
  './assets/audio/duel.m4a'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Cache addAll failed for some assets:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // For same-origin requests
  if (url.origin === location.origin) {
    // Media & Audio: Cache first, fallback to network and cache dynamic
    if (url.pathname.includes('/assets/') || 
        url.pathname.endsWith('.webp') || url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.mp3') || url.pathname.endsWith('.m4a') || url.pathname.endsWith('.ogg')) {
      event.respondWith(
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          }).catch(() => cached);
        })
      );
      return;
    }

    // HTML, JS, CSS: Stale-While-Revalidate (serve cache immediately, update in background)
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        }).catch(() => cached);

        return cached || fetchPromise;
      })
    );
  }
});
