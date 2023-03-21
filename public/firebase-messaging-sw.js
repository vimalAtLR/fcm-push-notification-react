/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyArBzQzxx31N0QMrdZludBABxEZxmORF5k",
    authDomain: "fcm-push-notification-4a59d.firebaseapp.com",
    projectId: "fcm-push-notification-4a59d",
    storageBucket: "fcm-push-notification-4a59d.appspot.com",
    messagingSenderId: "316691962644",
    appId: "1:316691962644:web:697555097c7c9ef7298001",
    measurementId: "G-2RPSJN1SGW"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  this.registration.showNotification(notificationTitle, notificationOptions);
});