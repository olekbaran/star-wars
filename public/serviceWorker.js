const self = this;
const cacheName = "star-wars-0.0.0";

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return null;
          }
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  if (
    event.request.url.startsWith("chrome-extension") ||
    !(event.request.url.indexOf("http") === 0)
  ) {
    return;
  }

  event.respondWith(
    (async function () {
      try {
        const res = await fetch(event.request);
        const cache = await caches.open(cacheName);
        cache.put(event.request.url, res.clone());
        return res;
      } catch (error) {
        return caches.match(event.request);
      }
    })()
  );
});