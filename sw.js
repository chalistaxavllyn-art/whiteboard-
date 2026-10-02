self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('papan-cute-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
        'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
