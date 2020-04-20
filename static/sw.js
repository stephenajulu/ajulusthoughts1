const CACHE_VERSION = 7;

const BASE_CACHE_FILES = [
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

const OFFLINE_CACHE_FILES = [
    '/offline',
];

const NOT_FOUND_CACHE_FILES = [
    '/404.html',
];

const OFFLINE_PAGE = '/offline';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 3600,
    json: 86400,
    js: 86400,
    css: 86400,
};

const CACHE_BLACKLIST = [
    //(str) => {
    //    return !str.startsWith('https://blog.stephenajulu.com') && !str.startsWith('https://d33wubrfki0l68.cloudfront.net/') && !str.startsWith('https://fonts.gstatic.com/') && !str.startsWith('https://fonts.googleapis.com/') && !str.startsWith('https://cloudflare.com/');
    //},
];

const SUPPORTED_METHODS = [
    'GET',
];

/**
 * isBlackListed
 * @param {string} url
 * @returns {boolean}
 */
function isBlacklisted(url) {
    return (CACHE_BLACKLIST.length > 0) ? !CACHE_BLACKLIST.filter((rule) => {
        if(typeof rule === 'function') {
            return !rule(url);
        } else {
            return false;
        }
    }).length : false
}

/**
 * getFileExtension
 * @param {string} url
 * @returns {string}
 */
function getFileExtension(url) {
    let extension = url.split('.').reverse()[0].split('?')[0];
    return (extension.endsWith('/')) ? '/' : extension;
}

/**
 * getTTL
 * @param {string} url
 */
function getTTL(url) {
    if (typeof url === 'string') {
        let extension = getFileExtension(url);
        if (typeof MAX_TTL[extension] === 'number') {
            return MAX_TTL[extension];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/**
 * installServiceWorker
 * @returns {Promise}
 */
function installServiceWorker() {
    return Promise.all(
        [
            caches.open(CACHE_VERSIONS.assets)
                .then(
                    (cache) => {
                        return cache.addAll(BASE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.offline)
                .then(
                    (cache) => {
                        return cache.addAll(OFFLINE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.notFound)
                .then(
                    (cache) => {
                        return cache.addAll(NOT_FOUND_CACHE_FILES);
                    }
                )
        ]
    );
}

/**
 * cleanupLegacyCache
 * @returns {Promise}
 */
function cleanupLegacyCache() {

    let currentCaches = Object.keys(CACHE_VERSIONS)
        .map(
            (key) => {
                return CACHE_VERSIONS[key];
            }
        );

    return new Promise(
        (resolve, reject) => {

            caches.keys()
                .then(
                    (keys) => {
                        return legacyKeys = keys.filter(
                            (key) => {
                                return !~currentCaches.indexOf(key);
                            }
                        );
                    }
                )
                .then(
                    (legacy) => {
                        if (legacy.length) {
                            Promise.all(
                                legacy.map(
                                    (legacyKey) => {
                                        return caches.delete(legacyKey)
                                    }
                                )
                            )
                                .then(
                                    () => {
                                        resolve()
                                    }
                                )
                                .catch(
                                    (err) => {
                                        reject(err);
                                    }
                                );
                        } else {
                            resolve();
                        }
                    }
                )
                .catch(
                    () => {
                        reject();
                    }
                );

        }
    );
}


self.addEventListener(
    'install', event => {
        event.waitUntil(installServiceWorker());
    }
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
    'activate', event => {
        event.waitUntil(
            Promise.all(
                [
                    cleanupLegacyCache(),
                ]
            )
                .catch(
                    (err) => {
                        event.skipWaiting();
                    }
                )
        );
    }
);

self.addEventListener(
    'fetch', event => {

        event.respondWith(
            caches.open(CACHE_VERSIONS.content)
                .then(
                    (cache) => {

                        return cache.match(event.request)
                            .then(
                                (response) => {

                                    if (response) {

                                        let headers = response.headers.entries();
                                        let date = null;

                                        for (let pair of headers) {
                                            if (pair[0] === 'date') {
                                                date = new Date(pair[1]);
                                            }
                                        }

                                        if (date) {
                                            let age = parseInt((new Date().getTime() - date.getTime()) / 1000);
                                            let ttl = getTTL(event.request.url);

                                            if (ttl &amp;&amp; age > ttl) {

                                                return new Promise(
                                                    (resolve) => {

                                                        return fetch(event.request)
                                                            .then(
                                                                (updatedResponse) => {
                                                                    if (updatedResponse) {
                                                                        cache.put(event.request, updatedResponse.clone());
                                                                        resolve(updatedResponse);
                                                                    } else {
                                                                        resolve(response)
                                                                    }
                                                                }
                                                            )
                                                            .catch(
                                                                () => {
                                                                    resolve(response);
                                                                }
                                                            );

                                                    }
                                                )
                                                    .catch(
                                                        (err) => {
                                                            return response;
                                                        }
                                                    );
                                            } else {
                                                return response;
                                            }

                                        } else {
                                            return response;
                                        }

                                    } else {
                                        return null;
                                    }
                                }
                            )
                            .then(
                                (response) => {
                                    if (response) {
                                        return response;
                                    } else {
                                        return fetch(event.request)
                                            .then(
                                                (response) => {

                                                    if(response.status < 400) {
                                                        if (~SUPPORTED_METHODS.indexOf(event.request.method) &amp;&amp; !isBlacklisted(event.request.url)) {
                                                            cache.put(event.request, response.clone());
                                                        }
                                                        return response;
                                                    } else {
                                                        return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
                                                            return cache.match(NOT_FOUND_PAGE);
                                                        })
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                                if(response) {
                                                    return response;
                                                }
                                            })
                                            .catch(
                                                () => {

                                                    return caches.open(CACHE_VERSIONS.offline)
                                                        .then(
                                                            (offlineCache) => {
                                                                return offlineCache.match(OFFLINE_PAGE)
                                                            }
                                                        )

                                                }
                                            );
                                    }
                                }
                            )
                            .catch(
                                (error) => {
                                    console.error('  Error in fetch handler:', error);
                                    throw error;
                                }
                            );
                    }
                )
        );

    }
);
