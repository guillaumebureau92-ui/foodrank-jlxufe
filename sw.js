const C='fr-v4';self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icon.svg','catalog.js']))));
self.addEventListener('fetch',e=>{if(e.request.url.includes('openfoodfacts'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
