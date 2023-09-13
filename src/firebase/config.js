import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8fyIsBbt7V3bnqvkdZdx6rntxnJDZYpo",
    authDomain: "fir-a0f98.firebaseapp.com",
    projectId: "fir-a0f98",
    storageBucket: "fir-a0f98.appspot.com",
    messagingSenderId: "810174499397",
    appId: "1:810174499397:web:22fbe79121e6739ccab12c",
    measurementId: "G-Q1QTCHCSS9"
  };

export default firebase.initializeApp(firebaseConfig)