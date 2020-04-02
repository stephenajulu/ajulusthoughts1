//remember to increment the version # when you update the service worker
const version = "2.00",
    preCache = "PRECACHE-" + version,
    cacheList = [
    "/"
    "/authors/"
    "/post/building-a-beautiful-progressive-jamstack-blog-part-1-day-1-to-3/"
    "/post/"
    "/authors/stephen-ajulu/"
    "/post/the-8-phases-of-cyber-security-testing/"
    "/post/10-anonymity-rules/"
    "/post/the-5-phases-of-hacking/"
    "/post/10-internet-safety-rules/"
    "/post/young-kenyan-hackers-making-money-illegally-by-targeting-banks/"
    "/post/2017-04-30-why-we-built-a-company-before-a-product/"
    "/post/2018-04-27-building-hoppers-media-centre-secret/"
    "/about/"
    "/offline/"
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

            console.log( "service worker activated" );

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
