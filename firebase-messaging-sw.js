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
