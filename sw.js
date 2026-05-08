const CACHE_NAME = 'hello-pwa-v1';
const assets = ['/index.html'];

// Instala o Service Worker e armazena o HTML no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});