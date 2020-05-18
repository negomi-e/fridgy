// CODE COPIED FROM RUSLAN NIU
import 'firebase/storage';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYj9-Li4JINbsV6aHkApPcBTqRK8vDIyw",
    authDomain: "fridgy-2020.firebaseapp.com",
    databaseURL: "https://fridgy-2020.firebaseio.com",
    projectId: "fridgy-2020",
    storageBucket: "fridgy-2020.appspot.com",
    messagingSenderId: "1054404587197",
    appId: "1:1054404587197:web:5dfa05f609303fdc2491d4",
    measurementId: "G-SZDMEWYK3S"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export {
   firebase as default,
};