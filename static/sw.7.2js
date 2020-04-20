class Pwa {

    constructor(self) {
        this.scope = self;
        this.CACHE_VERSION = 7.2;
        this.BASE_CACHE_FILES = [
'/',
    '/meta/ios/ios-appicon-180-180.png',
    '/images/favicon.svg',
    '/post/resources-for-building-a-beautiful-progressive-jamstack-blog/',
    '/post//building-a-beautiful-progressive-jamstack-blog-part-2-day-4-to-7/',
    '/post/building-a-beautiful-progressive-jamstack-blog-part-1-day-1-to-3/',
    '/author/stephen-ajulu',
    '/offline',
    '/404.html',
    '/manifest.json',
    '/favicon.png',
    'https://d33wubrfki0l68.cloudfront.net/bundles/a36a4810339769a578b3ee442503fe2b6cb08166.css',
    'https://fonts.googleapis.com/css?family=Merriweather&display=swap',
    'https://d33wubrfki0l68.cloudfront.net/js/a70fef721cbefa53f8ab14fb43ee2dd3d9af454a/js/initcolors.js',
    'https://d33wubrfki0l68.cloudfront.net/bundles/ffdfd4dbde4b6b473eb9d02ae0196f9045b68c9d.js',
    'https://d33wubrfki0l68.cloudfront.net/js/7634703a2a7abab226c88189d3a8c61312a79457/js/togglelayout.js',
    'https://d33wubrfki0l68.cloudfront.net/js/54c3ca003a69aac3507e73847b2a8ff52d2cf00d/js/prism.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    'https://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-fCZM.woff2',
    'https://d33wubrfki0l68.cloudfront.net/cb2921d6f3bb97974cff70d2913526cc8d399289/c2358/images/rsz_author.webp',
    'https://d33wubrfki0l68.cloudfront.net/a03a3339513e96e5d2b881320ad607e618a9893e/87955/images/screenshot_2020-03-31_20stephen_20ajulu_27s_20blog_e31928d93e0d53d288cde238ac72207d.webp',
    'https://d33wubrfki0l68.cloudfront.net/0534b6edad63fb042f89ce15cd0b91bca809e8c1/ba923/images/anonymity.webp',
    'https://d33wubrfki0l68.cloudfront.net/6609ec32bd9039d4621ac8f91e570263006933bd/c7d3f/images/cyber-crime-cpo-magazine-1024x587-1.jpg',
    'https://d33wubrfki0l68.cloudfront.net/54e4c70705c34e2a3a1d66da8f9331534bc2e58f/7d225/images/cybersecurity-post_2d00_1600x900.webp',
    'https://d33wubrfki0l68.cloudfront.net/6a625ace8289e248278f3c1352b400dc2f7c7817/ecdc4/images/186a28551d84d22b06898818573b5be1.webp',
    'https://d33wubrfki0l68.cloudfront.net/177ba634c992998648f5b9b8cafe70132ccae86e/214af/images/vmware-trustpoint-cybersecurity-threats.webp',
    'https://d33wubrfki0l68.cloudfront.net/28c5433b163344043e2d9c9f181dfc03d477cec4/6b909/images/photodune-21732180-diverse-computer-hacking-shoot-bw.webp',
    'https://d33wubrfki0l68.cloudfront.net/aa2aff1a45a1e85c7d5fecee6381ce31b7a89334/6ab56/images/stackbit-tuts-with-audio2_moment.webp',
        ];
        this.host = `${self.location.protocol}//${self.location.host}`;
        console.info(`Host: ${this.host}`);
        this.OFFLINE_PAGE = '/offline/';
        this.NOT_FOUND_PAGE = '/404.html';
        this.CACHE_NAME = `content-v${this.CACHE_VERSION}`;
        this.MAX_TTL = 86400;
        this.TTL_EXCEPTIONS = ["jpg", "jpeg", "png", "gif", "mp4"];
    }

    canCache(url) {
        if (url.startsWith("http://localhost")) {
            return false;
        }
        const result = url.toString().startsWith(this.host);
        return result;
    }

    getFileExtension(url) {
        const extension = url.split('.').reverse()[0].split('?')[0];
        return (extension.endsWith('/')) ? '/' : extension;
    }

    getTTL(url) {
        if (typeof url === 'string') {
            const extension = this.getFileExtension(url);
            return ~this.TTL_EXCEPTIONS.indexOf(extension) ?
                null : this.MAX_TTL;
        }
        return null;
    }

    async installServiceWorker() {
        try {
            await caches.open(this.CACHE_NAME).then((cache) => {
                return cache.addAll(this.BASE_CACHE_FILES);
            }, err => console.error(`Error with ${this.CACHE_NAME}`, err));
            return this.scope.skipWaiting();
        }
        catch (err) {
            return console.error("Error with installation: ", err);
        }
    }

    cleanupLegacyCache() {

        const currentCaches = [this.CACHE_NAME];

        return new Promise(
            (resolve, reject) => {
                caches.keys()
                    .then((keys) => keys.filter((key) => !~currentCaches.indexOf(key)))
                    .then((legacy) => {
                        if (legacy.length) {
                            Promise.all(legacy.map((legacyKey) => caches.delete(legacyKey))
                            ).then(() => resolve()).catch((err) => {
                                console.error("Error in legacy cleanup: ", err);
                                reject(err);
                            });
                        } else {
                            resolve();
                        }
                    }).catch((err) => {
                        console.error("Error in legacy cleanup: ", err);
                        reject(err);
                    });
            });
    }

    async preCacheUrl(url) {
        const cache = await caches.open(this.CACHE_NAME);
        const response = await cache.match(url);
        if (!response) {
            return fetch(url).then(resp => cache.put(url, resp.clone()));
        }
        return null;
    }

    register() {
        this.scope.addEventListener('install', event => {
            event.waitUntil(
                Promise.all([
                    this.installServiceWorker(),
                    this.scope.skipWaiting(),
                ]));
        });

        this.scope.addEventListener('activate', event => {
            event.waitUntil(Promise.all(
                [this.cleanupLegacyCache(),
                this.scope.clients.claim(),
                this.scope.skipWaiting()]).catch((err) => {
                    console.error("Activation error: ", err);
                    event.skipWaiting();
                }));
        });

        this.scope.addEventListener('fetch', event => {
            event.respondWith(
                caches.open(this.CACHE_NAME).then(async cache => {
                    if (!this.canCache(event.request.url)) {
                        return fetch(event.request);
                    }
                    const response = await cache.match(event.request);
                    if (response) {
                        const headers = response.headers.entries();
                        let date = null;
                        for (let pair of headers) {
                            if (pair[0] === 'date') {
                                date = new Date(pair[1]);
                                break;
                            }
                        }
                        if (!date) {
                            return response;
                        }
                        const age = parseInt(((new Date().getTime() - date.getTime()) / 1000).toString());
                        const ttl = this.getTTL(event.request.url);
                        if (ttl === null || (ttl && age < ttl)) {
                            return response;
                        }
                    }
                    return fetch(event.request.clone()).then(resp => {
                        if (resp.status < 400) {
                            if (this.canCache(event.request.url)) {
                                cache.put(event.request, resp.clone());
                            }
                            return resp;
                        }
                        else {
                            return cache.match(this.NOT_FOUND_PAGE);
                        }
                    }).catch(err => {
                        console.error(`Error fetching ${event.request.url} resulted in offline`, err);
                        return cache.match(this.OFFLINE_PAGE);
                    })
                }));
        });
    }
}

const pwa = new Pwa(self);
pwa.register();
