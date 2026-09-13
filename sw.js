const CACHE_NAME = 'mesthri-cache-v1';
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
  'settings.html',     // സെറ്റിംഗ്സ് / ബാക്ക്അപ്പ് പേജ് ഇവിടെ ചേർത്തിരിക്കുന്നു
  'manifest.json',
  'icon.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate Service Worker & Clean Old Caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
