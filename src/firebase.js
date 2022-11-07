import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzaznL1_mdaQ40wEoeAiATyDlW9DeG0nk",
    authDomain: "clone-bfd8a.firebaseapp.com",
    projectId: "clone-bfd8a",
    storageBucket: "clone-bfd8a.appspot.com",
    messagingSenderId: "159511745870",
    appId: "1:159511745870:web:90f4ba5bec069f265f7a1f",
    measurementId: "G-64F5KVYEVL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};