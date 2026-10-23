
const CACHE_NAME = "sacchi-flyier-v2";

const APP_FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/script.js",
  "/pwa-192x192.png",
  "/pwa-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache files individually so one missing file
      // doesn't prevent the other files from caching.
      await Promise.all(
        APP_FILES.map(async (url) => {
          try {
            const response = await fetch(url);

            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (error) {
            console.warn("Could not cache:", url);
          }
        })
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("sacchi-flyier-") &&
                           key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" ||
      url.origin !== self.location.origin) {
    return;
  }

  // Always try the network first for HTML pages.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) =>
              cache.put(request, copy)
            );
          }
          return response;
        })
        .catch(async () =>
          (await caches.match(request)) ||
          (await caches.match("/index.html")) ||
          new Response("You are offline.", { status: 503 })
        )
    );
    return;
  }

  // For CSS, JS, images and other assets:
  // use cached files first, then fetch and cache.
  event.respondWith(
    caches.match(request).then(async (cached) => {
      if (cached) return cached;

      const response = await fetch(request);

      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) =>
          cache.put(request, copy)
        );
      }

      return response;
    })
  );
});
