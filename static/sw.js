//remember to increment the version # when you update the service worker
const version = "17.00",
    preCache = "PRECACHE-" + version,
    cacheList = [ 
    "/",
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
    'https://d33wubrfki0l68.cloudfront.net/aa2aff1a45a1e85c7d5fecee6381ce31b7a89334/6ab56/images/stackbit-tuts-with-audio2_moment.webp'
    ];

/*
create a list (array) of urls to pre-cache for your application
*/

/*  Service Worker Event Handlers */

self.addEventListener( "install", function ( event ) {

    console.log( "Installing the service worker!" );

    self.skipWaiting();

    caches.open( preCache )
        .then( cache => {

            cache.addAll( cacheList );

        } );

} );

self.addEventListener( "activate", function ( event ) {

    event.waitUntil(

        //wholesale purge of previous version caches
        caches.keys().then( cacheNames => {
            cacheNames.forEach( value => {

                if ( value.indexOf( version ) < 0 ) {
                    caches.delete( value );
                }

            } );

            console.log( "ajulu s service worker activated" );

            return;

        } )

    );

} );

self.addEventListener( "fetch", function ( event ) {

    event.respondWith(

        fetch( event.request )

        /* check the cache first, then hit the network */
        /*
                caches.match( event.request )
                .then( function ( response ) {

                    if ( response ) {
                        return response;
                    }

                    return fetch( event.request );
                } )
        */
    );

} );


/* service worker resources

https: //love2dev.com/blog/what-is-the-service-worker-cache-storage-limit/
https: //love2dev.com/blog/service-worker-cache/

*/
