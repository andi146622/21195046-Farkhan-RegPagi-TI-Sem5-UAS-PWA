var cacheName = 'portfolio-pwa';
var filesToCache = ['/', '/index.html', '/css/style.css', '/js/script.js', '/js/firebase.js', '/js/indexDB.js', '/manifest.json', '/profilee.png', 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js', 'https://unpkg.com/scrollreveal'];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

// activate event
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)));
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

// NOTIFICATION FIREBASE FCM
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDIGNPQYXNwHh5YHGMEJ7oEX5VlDtAIZmA',
  authDomain: 'tugas-kelompok-fcm-bc9df.firebaseapp.com',
  projectId: 'tugas-kelompok-fcm-bc9df',
  storageBucket: 'tugas-kelompok-fcm-bc9df.appspot.com',
  messagingSenderId: '502033436334',
  appId: '1:502033436334:web:8ae8dacce808e36729273f',
  measurementId: 'G-813C4W49PF',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler((payload) => {
//   console.log(payload);
//   const notificationTitle = payload.data.notification.title;
//   const notificationOptions = {
//     body: payload.data.notification.body,
//   };
//   //Show the notification
//   return self.registration.showNotification(notificationTitle, notificationOptions);
// });
