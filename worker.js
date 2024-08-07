// worker.js

const version = "version 1.2";

self.addEventListener("install", e => {
    console.log("Instalando Service Worker");
    self.skipWaiting();  // Fuerza la activación del nuevo SW inmediatamente
    e.waitUntil(
        caches.open(version).then(cache => {
            return cache.addAll(["index.html"]).then(() => {
                console.log("Información cacheada");
            }).catch(err => {
                console.log(err);
            });
        })
    );
});

// Activación del Service Worker
self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== version) {
                        console.log("Cache antiguo eliminado");
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Intercepción de solicitudes de red
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(respuestaEnCache => {
            if (respuestaEnCache) {
                return respuestaEnCache;
            }
            return fetch(e.request).then(response => {
                return caches.open(version).then(cache => {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
