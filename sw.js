const CacheEstatico = "Estatico-1";
const CacheInmutable = "Inmutable-1";
const CacheDinamico = "Dinamico-1";

self.addEventListener("install", (e) => {
  const cacheProm = caches.open(CacheEstatico).then((cache) => {
    cache.addAll([
    '/',
    ' index.html',
    '/js/app.js',
    'sw.js',
    'favicon.png',
    'logo.png',
    '/js/js.js',
    '/js/script.js',   
    '/img/hibki.png',
    '/img/tsubasa.png',
    '/img/chris.png',
    '/img/maria.png',
    '/img/shirabe.png',
    '/img/kirika.png',
    '/page/hibiki.html',
    '/page/tsubasa.html',
    '/page/chris.html',
    '/page/maria.html',
    '/page/kirika.html',
    '/page/adam.html',
    '/page/shem.html',
    '/page/miku.html',
    '/img/cover1.jpg',
    '/img/cover1.jpg',
    '/img/COVER3.jpg',
    '/img/cover4.jpg',
    '/img/cover5.jpg',
    '/img/cover6.jpg',
    '/img/coverincogni1.png',
    '/img/coverincogni2.jpg',
    '/img/coverincogni3.jpg',

    '/page/img/hq.png',
    '/page/img/tk.png',
    '/page/img/cy.png',
    '/page/img/mc.png',
    '/page/img/sst.png',
    '/page/img/ka.png',
    '/page/img/aw.png',
    '/page/img/sh.png',
    '/page/img/mk.png',
    '/img/img/b-h.png',
    '/img/img/ig-h.png',
    '/img/img/br-h.png',
    '/img/img/driver-h.png',
    '/img/img/burning-h.png',
    '/img/img/dr-h.png',
    '/img/img/b-t.png',
    '/img/img/ig-t.png',
    '/img/img/driver-t.png',
    '/img/img/burning-t.png',
    '/img/img/dr-t.png',
    '/img/img/b-c.png',
    '/img/img/n-c.png',
    '/img/img/ig-c.png',
    '/img/img/driver-c.png',
    '/img/img/burning-c.png',
    '/img/img/dr-c.png',
    '/img/img/b-m.png',
    '/img/img/bg-m.png',
    '/img/img/ig-m.png',
    '/img/img/br-m.png',
    '/img/img/driver-m.png',
    '/img/img/burning-m.png',
    '/img/img/dr-m.png',
    '/img/img/b-s.png',
    '/img/img/ig-s.png',
    '/img/img/driver-s.png',
    '/img/img/burning-s.png',
    '/img/img/dr-s.png',
    '/img/img/b-k.png',
    '/img/img/ig-k.png',
    '/img/img/driver-k.png',
    '/img/img/burning-k.png',
    '/img/img/dr-k.png',
    '/img/img/b-a.png',
    '/img/img/bg-a.png',
    '/img/img/shem-ha.png',
    '/img/img/b-mk.png',
    '/img/img/rec-mk.png',
    '/img/img/ig-mk.png',
    '/img/img/driverF-mk.png',
    '/img/img/dr-mk.png', 
    '/img/icons/64x64.png',
    '/img/icons/96x96.png',
    '/img/icons/128x128.png',
    '/img/icons/256x256.png',
    ' js/jquery.min.js',

    ]);
  });

  //cache inmutable no se modifica
  const cacheInm = caches.open(CacheInmutable).then((cache) => {
    cache.addAll([
  "/",
    
	' /css/style.css',
  '/page/css/bootstrap.min.css',
  '/page/css/stylegun.css',
  '/page/css/stylebari.css',
  '/page/css/stylecha.css',
  '/page/css/styletla.css',
  '/page/css/style.css',
  '/page/css/style.css',
  '/page/css/style.css',
  '/page/css/style.css',
  ' js/bootstrap.bundle.min.js',
  'bootatrap.bundle.min.js.map',
  ' css/bootstrap.min.css',
  ' page/css/bootstrap.min.css',
    ]);
  });

});

self.addEventListener("activate", (e) => {
  event.waitUntil(async () => {
    const keys = await caches.keys();
    return keys.map(async (cache) => {
      if (!cache == CacheEstatico) {
        console.log("Cache viejo eliminado" + cache);
        return await caches.delete(cache);
      }
    });
  });
});

self.addEventListener("fetch", (e) => {
  //cache with network fallback
  const respuesta = caches
    .match(e.request) //buscamos un recurso
    .then((res) => {
      if (res) return res;
      console.log("No existe el recurso en cache ->", e.request.url);

      return fetch(e.request)
        .then((newResp) => {
          //no existe el archivo vamos a internet

          caches.open(CacheDinamico).then((cache) => {
            cache.put(e.request, newResp);
          });

          return newResp.clone();
        })
        .catch((err) => {
          return caches.match('page404/404.html'); //error-404/index.html | img/imagen sin conexion.jpg
        });
    });
  e.respondWith(respuesta);
});
