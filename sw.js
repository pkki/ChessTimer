// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
    './',
    './index.html',
    './sw.js',
    './style.css',
    './manifest.json',
    './favicon.ico',
    './192.png',
    './DSEG7Modern-Bold.ttf',
  
    // voice files
    './voice/men1/1s.mp3',
    './voice/men1/2s.mp3',
    './voice/men1/3s.mp3',
    './voice/men1/4s.mp3',
    './voice/men1/5s.mp3',
    './voice/men1/6s.mp3',
    './voice/men1/7s.mp3',
    './voice/men1/8s.mp3',
    './voice/men1/9s.mp3',
    './voice/men1/10.mp3',
    './voice/men1/10s.mp3',
    './voice/men1/20s.mp3',
    './voice/men1/30s.mp3',
    './voice/men1/40s.mp3',
    './voice/men1/50s.mp3',
    './voice/men1/60s.mp3',
    './voice/men1/1m.mp3',
    './voice/men1/3m.mp3',
    './voice/men1/5m.mp3',
    './voice/men1/10m.mp3',
    './voice/men1/gover.mp3',
    './voice/men1/sover.mp3',
    './voice/men1/w.mp3',
  
    './voice/woman1/1s.mp3',
    './voice/woman1/2s.mp3',
    './voice/woman1/3s.mp3',
    './voice/woman1/4s.mp3',
    './voice/woman1/5s.mp3',
    './voice/woman1/6s.mp3',
    './voice/woman1/7s.mp3',
    './voice/woman1/8s.mp3',
    './voice/woman1/9s.mp3',
    './voice/woman1/10.mp3',
    './voice/woman1/10s.mp3',
    './voice/woman1/20s.mp3',
    './voice/woman1/30s.mp3',
    './voice/woman1/40s.mp3',
    './voice/woman1/50s.mp3',
    './voice/woman1/60s.mp3',
    './voice/woman1/1m.mp3',
    './voice/woman1/3m.mp3',
    './voice/woman1/5m.mp3',
    './voice/woman1/10m.mp3',
    './voice/woman1/gover.mp3',
    './voice/woman1/sover.mp3',
    './voice/woman1/w.mp3',
  
    './voice/men1_America/1s.mp3',
    './voice/men1_America/2s.mp3',
    './voice/men1_America/3s.mp3',
    './voice/men1_America/4s.mp3',
    './voice/men1_America/5s.mp3',
    './voice/men1_America/6s.mp3',
    './voice/men1_America/7s.mp3',
    './voice/men1_America/8s.mp3',
    './voice/men1_America/9s.mp3',
    './voice/men1_America/10.mp3',
    './voice/men1_America/10s.mp3',
    './voice/men1_America/20s.mp3',
    './voice/men1_America/30s.mp3',
    './voice/men1_America/40s.mp3',
    './voice/men1_America/50s.mp3',
    './voice/men1_America/60s.mp3',
    './voice/men1_America/1m.mp3',
    './voice/men1_America/3m.mp3',
    './voice/men1_America/5m.mp3',
    './voice/men1_America/10m.mp3',
    './voice/men1_America/gover.mp3',
    './voice/men1_America/sover.mp3',
    './voice/men1_America/w.mp3',
  
    './voice/zunda/1s.mp3',
    './voice/zunda/2s.mp3',
    './voice/zunda/3s.mp3',
    './voice/zunda/4s.mp3',
    './voice/zunda/5s.mp3',
    './voice/zunda/6s.mp3',
    './voice/zunda/7s.mp3',
    './voice/zunda/8s.mp3',
    './voice/zunda/9s.mp3',
    './voice/zunda/10.mp3',
    './voice/zunda/10s.mp3',
    './voice/zunda/20s.mp3',
    './voice/zunda/30s.mp3',
    './voice/zunda/40s.mp3',
    './voice/zunda/50s.mp3',
    './voice/zunda/60s.mp3',
    './voice/zunda/1m.mp3',
    './voice/zunda/3m.mp3',
    './voice/zunda/5m.mp3',
    './voice/zunda/10m.mp3',
    './voice/zunda/gover.mp3',
    './voice/zunda/sover.mp3',
    './voice/zunda/w.mp3',

    './voice/sound/1.mp3',
    './voice/sound/2.mp3',
    './voice/sound/3.mp3',
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(async (cache) => {
        for (const url of urlsToCache) {
          try {
            await cache.add(url);
          } catch (e) {
            console.warn(`Failed to cache ${url}`, e);
          }
        }
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => 
        cache.match(event.request).then(response => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
          return response || fetchPromise;
        })
      )
    );
  });