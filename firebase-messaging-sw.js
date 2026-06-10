importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyANoH7F0DacQhEkSkH57rykzHj8Ma93r74",
  authDomain: "gfc-restaurant-51bb8.firebaseapp.com",
  projectId: "gfc-restaurant-51bb8",
  storageBucket: "gfc-restaurant-51bb8.firebasestorage.app",
  messagingSenderId: "59057512480",
  appId: "1:59057512480:web:45d9dcd26a36048cd99c45"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/logo.png"
    }
  );
});
