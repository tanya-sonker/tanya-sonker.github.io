importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    // if online, searches from network
    // if offline, fallback is to look in cache
    new workbox.strategies.NetworkFirst()
);