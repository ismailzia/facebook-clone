// import firebase from "firebase";
// import "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7SS_ldPtGNKZgZcF61IOYdobjUaeZKEA",
  authDomain: "facebook-iz.firebaseapp.com",
  projectId: "facebook-iz",
  storageBucket: "facebook-iz.appspot.com",
  messagingSenderId: "634696405491",
  appId: "1:634696405491:web:10a6bb8edd17c672ba4286",
  measurementId: "G-45YCDJ4DER",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
