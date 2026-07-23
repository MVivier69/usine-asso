/* USINE-ASSO — service worker
   Changez le numéro de version ci-dessous après toute modification
   de index.html ou de sw.js (ex. "usine-v1" -> "usine-v2").
   NOTE : ce n'est PAS nécessaire pour config.js ni pour les images,
   qui sont rechargés automatiquement (voir stratégie plus bas). */
const CACHE = "usine-v3";

/* Fichiers mis en cache dès l'installation (fonctionnement hors connexion) */
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  /* config.js et le dossier images/ : on va TOUJOURS chercher la version
     la plus récente sur le réseau (pour que vos modifications et vos
     nouvelles images apparaissent immédiatement), avec repli sur le
     cache si l'appareil est hors connexion. */
  const dynamique = url.pathname.endsWith("/config.js") || url.pathname.includes("/images/");
  if (dynamique) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  /* Reste de l'application : cache d'abord (rapidité + hors connexion) */
  e.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    )
  );
});
