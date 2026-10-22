
const CACHE_NAME = "sacchi-flyier-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./style.css",
  "./script.js"
  "./offline.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_FILES)
    )
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
  Promise.all(
    keys
      .filter(
        (key) =>
          key.startsWith("sacchi-flyier-") &&
          key !== CACHE_NAME
      )
      .map((key) => caches.delete(key))
  )
)
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

event.respondWith(
  fetch(event.request).catch(async () => {
    const cached = await caches.match(event.request);

    if (cached) {
      return cached;
    }

    if (event.request.mode === "navigate") {
      const offlinePage = await caches.match("./offline.html");

      if (offlinePage) {
        return offlinePage;
      }
    }

    return Response.error();
  })
);
