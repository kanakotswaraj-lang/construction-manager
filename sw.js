const CACHE_NAME = 'mesthri-cache-v1';
const urlsToCache = [
  'dashboard.html',
  'manifest.json'
];const CACHE_NAME = 'mesthri-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'login.html',
  'dashboard.html',
  'staff.html',
  'staff-details.html',
  'accounts.html',
  'cash.html',
  'transactions.html',
  'work-entry.html',
  'materials.html',
  'rentals.html',
  'site.html',
  'estimator.html',
  'history.html',
  'manifest.json',
  'icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
