// BANG! Companion Service Worker (PWA Offline Support & Asset Caching)
const APP_CACHE_NAME = 'bang-app-v60';
const IMAGE_CACHE_NAME = 'bang-images-v1';

// Core Application Shell Assets
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
  './assets/images-manifest.json',
  './assets/bang-logo.webp',
  './assets/bang-logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/western/saloon_wood.jpg',
  './assets/western/saloon_wood_header.jpg',
  './assets/western/sheriff_star_thumb.jpg',
  './assets/western/wanted_poster_thumb.jpg',
  './assets/symbols/symbol_bang.png',
  './assets/symbols/symbol_missed.png',
  './assets/symbols/symbol_regain_life.png',
  './assets/symbols/symbol_draw_card.png',
  './assets/symbols/symbol_discard_card.png',
  './assets/symbols/symbol_reachable_distance.png',
  './assets/symbols/symbol_distance_x.png',
  './assets/symbols/symbol_any_one_player.png',
  './assets/symbols/symbol_all_other_players.png',
  './assets/symbols/symbol_draw_check.png',
  './assets/symbols/symbol_barrel.png',
  './assets/symbols/symbol_dynamite.png',
  './assets/symbols/symbol_jail.png',
  './assets/symbols/symbol_mustang.png',
  './assets/symbols/symbol_scope.png',
  './assets/symbols/symbol_life_points.png',
  './assets/audio/gunshot.mp3',
  './assets/audio/ricochet.m4a',
  './assets/audio/cock.m4a',
  './assets/audio/dynamite.m4a',
  './assets/audio/barrel.m4a',
  './assets/audio/knife.m4a',
  './assets/audio/brawl.m4a',
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

// Helper: Progressive background pre-caching of all image assets
async function precacheAllImages() {
  try {
    const cache = await caches.open(IMAGE_CACHE_NAME);
    const res = await fetch('./assets/images-manifest.json');
    if (!res.ok) return;
    const imageList = await res.json();
    if (!Array.isArray(imageList)) return;

    // Batch fetching in small chunks to avoid saturating network or CPU
    const batchSize = 12;
    for (let i = 0; i < imageList.length; i += batchSize) {
      const batch = imageList.slice(i, i + batchSize);
      await Promise.allSettled(
        batch.map(async (imgUrl) => {
          const match = await cache.match(imgUrl);
          if (!match) {
            try {
              const resp = await fetch(imgUrl, { mode: 'cors' });
              if (resp && resp.status === 200) {
                await cache.put(imgUrl, resp);
              }
            } catch (e) {
              // Ignore single image fetch failure; will be retrieved on demand
            }
          }
        })
      );
    }
    console.log(`[SW] Precached all ${imageList.length} images into ${IMAGE_CACHE_NAME}`);
  } catch (err) {
    console.warn('[SW] Progressive image precaching background task notice:', err);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Cache addAll notice for some static assets:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // Only clean old app shell versions, preserve image cache
          if (key !== APP_CACHE_NAME && key !== IMAGE_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      // Trigger background image pre-caching once activated
      precacheAllImages();
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Same-Origin Assets
  if (url.origin === location.origin) {
    const isImage = (
      url.pathname.includes('/assets/') ||
      url.pathname.endsWith('.webp') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.ico')
    );

    const isAudio = (
      url.pathname.endsWith('.mp3') ||
      url.pathname.endsWith('.m4a') ||
      url.pathname.endsWith('.ogg') ||
      url.pathname.endsWith('.wav')
    );

    // Images & Audio: Cache-First strategy (serve immediately from memory/disk cache, fetch on miss)
    if (isImage || isAudio) {
      const targetCache = isImage ? IMAGE_CACHE_NAME : APP_CACHE_NAME;
      event.respondWith(
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(targetCache).then((c) => c.put(event.request, clone));
            }
            return response;
          }).catch(() => cached);
        })
      );
      return;
    }

    // HTML, JS, CSS: Stale-While-Revalidate (fast load + background code update)
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(APP_CACHE_NAME).then((c) => c.put(event.request, clone));
          }
          return networkResponse;
        }).catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // 2. Third-Party Fonts (Google Fonts stylesheets and font binaries)
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(APP_CACHE_NAME).then((c) => c.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});
