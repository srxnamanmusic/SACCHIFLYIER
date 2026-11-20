
const CACHE_NAME = "sacchi-flyier-v4";

const APP_FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/script.js",
  "/cart.js",
  "/checkout.js",
  "/checkout.css",
  "/product1.html",
  "/product2.html",
  "/product3.html",
  "/product4.html",
  "/pwa-192x192.png",
  "/pwa-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await Promise.all(
        APP_FILES.map(async (url) => {
          try {
            const response = await fetch(url, { cache: "no-cache" });

            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (error) {
            console.warn("Could not cache:", url, error);
          }
        })
      );

      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith("sacchi-flyier-") &&
              key !== CACHE_NAME
          )
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.method !== "GET" ||
    url.origin !== self.location.origin
  ) {
    return;
  }

  // HTML pages: network first, cached page as offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }

          return response;
        } catch (error) {
          return (
            (await caches.match(request)) ||
            (await caches.match("/index.html")) ||
            new Response("You are offline.", { status: 503 })
          );
        }
      })()
    );

    return;
  }

  // JavaScript and CSS: network first, to avoid outdated checkout code.
  if (
    request.destination === "script" ||
    request.destination === "style"
  ) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }

          return response;
        } catch (error) {
          const cached = await caches.match(request);

          if (cached) return cached;

          return new Response("This file is unavailable offline.", {
            status: 503
          });
        }
      })()
    );

    return;
  }

  // Other assets: cache first, then network.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);

      if (cached) return cached;

      const response = await fetch(request);

      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    })()
  );
});
