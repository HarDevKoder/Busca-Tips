//asignar un nombre y versión al cache
const CACHE_NAME = "v1_cache_HarDevTips",
  urlsToCache = [
    "./",
    "index.html",
    "css/normalize.css",
    "css/style.css",
    "js/libreria.js",
    "js/script.js",
    "imagenes/fondos/fondo.webp",
    "imagenes/favicons/brackets.png",
    "imagenes/categorias/programacion.svg",
    "imagenes/categorias/git.svg",
    "imagenes/categorias/sistemas.png",
    "imagenes/pwa/code128.png",
    "fuentes/roboto.ttf",
    "json/git.json",
    "json/sistemas.json",
    "json/seleccionar.json",
    "manifest.json",
    "sw.js"
  ];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Falló registro de cache", err))
  );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

// Evento de para forzar la actualización de la caché
self.addEventListener('message', function(event) {
  if (event.data.action === 'forceUpdate') {
    console.log('Forzando actualización de caché');
    self.skipWaiting(); // Forzar la instalación de un nuevo Service Worker
  }
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log("[Servicio Worker] Obteniendo recurso: " + e.request.url);
      return (
        r ||
        fetch(e.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            console.log(
              "[Servicio Worker] Almacena el nuevo recurso: " + e.request.url
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
