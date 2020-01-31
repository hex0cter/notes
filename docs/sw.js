self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');

  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/manifest.json',
          '/favicon.ico',
        ]);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', function(event) {
  return;
});
