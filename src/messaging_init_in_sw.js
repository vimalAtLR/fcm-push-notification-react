import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyArBzQzxx31N0QMrdZludBABxEZxmORF5k",
    authDomain: "fcm-push-notification-4a59d.firebaseapp.com",
    projectId: "fcm-push-notification-4a59d",
    storageBucket: "fcm-push-notification-4a59d.appspot.com",
    messagingSenderId: "316691962644",
    appId: "1:316691962644:web:697555097c7c9ef7298001",
    measurementId: "G-2RPSJN1SGW"
};


function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // Initialize Firebase Cloud Messaging and get a reference to the service
        const messaging = getMessaging(app);

        getToken(messaging, { vapidKey: "BO8W02PkFkvhONbMWUSoa3unGzCaQV0-BWaWDC_qGhc98TxGSAAUm75jCWkfN0v3GFzyi69_crDpw0u7bTG1ILM"})
        .then((currentToken) => {
            if (currentToken) {
                console.log("currentToken :: ", currentToken);
            } else {
                console.log("Can not get token.")
            } 
        }).catch(err => {
            console.log("err in getToken :: ", err);
        });

      } else {
        console.log("Do not have permission!");
      }
    });
}

requestPermission();