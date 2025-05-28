// // Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing the generated config
// var firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "bold-1d39b",
// //   storageBucket: "YOUR_STORAGE_BUCKET",
// //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "1:593584096267:android:12aff36905f3a2d6b2730e"
// };

// firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
// Import the functions you need from the SDKs you need


// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBE3OyS8zi594vFKuqBtFq1QGpyNusSHLo",
  authDomain: "bold-1d39b.firebaseapp.com",
  projectId: "bold-1d39b",
  storageBucket: "bold-1d39b.firebasestorage.app",
  messagingSenderId: "593584096267",
  appId: "1:593584096267:web:2b8915369d339308b2730e",
  measurementId: "G-2C9Z7HCVFQ"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});