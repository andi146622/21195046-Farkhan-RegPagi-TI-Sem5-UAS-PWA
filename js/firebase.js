const tombol = document.getElementById('gettoken');

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

tombol.onclick = function () {
  messaging
    .requestPermission()
    .then(() => {
      console.log('Notifications allowed');
      alert('Notifikasi Telah Diizinkan');
      return messaging.getToken();
    })
    .then((token) => {
      console.log(token);
      // const xhr = new XMLHttpRequest();
      // const url = 'http://localhost/save_token.php'; // Gantilah dengan path file PHP Anda
      // const params = 'token=' + token;
      // xhr.open('POST', url, true);
      // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState == 4 && xhr.status == 200) {
      //     console.log('Token berhasil dikirim ke server PHP');
      //   }
      // };
      // xhr.send(params);
    })
    .catch((err) => {
      console.log('No permission to send push', err);
    });
};

// Mendengarkan pesan yang masuk
messaging.onMessage(function (payload) {
  console.log('Message received:', payload);

  // Menampilkan notifikasi ketika pesan diterima
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image, // Ganti dengan path gambar ikon notifikasi Anda
  };

  // Menampilkan notifikasi menggunakan API Notifikasi Web
  const notification = new Notification(notificationTitle, notificationOptions);
});
