let versionOfCache = "restaurants-v1";

self.addEventListener('fetch' , event => {
    event.respondWith(
        fetch(event.request).then(response => {
            if (response.status == 404) {
                return new Response("Oops... Not found!");
            }
            return response;
        }).catch((e) => {
            return new Response("Oops... Failed!", e);
        })
    );
});

self.addEventListener('install' , event => {
    event.waitUntil(
        caches.open(versionOfCache).then(cache=> {
            return cache.addAll(
                [
                    './',
                    './index.html',
                    './restaurant.html',
                    './css/styles.css',
                    './img/1.jpg',
                    './img/2.jpg',
                    './img/3.jpg',
                    './img/4.jpg',
                    './img/5.jpg',
                    './img/6.jpg',
                    './img/7.jpg',
                    './img/8.jpg',
                    './img/9.jpg',
                    './img/10.jpg',
                    './js/dbhelper.js',
                    './js/main.js',
                    './js/restaurant_info.js',
                    './sw-register.js',
                    './data/restaurants.json'
                ]
            );
        })
    );
});

self.addEventListener('activate' , event => {

});