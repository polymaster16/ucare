// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6GUjLRxZG-8dYpzqXqtbZsWXhfDxx7-U",
  authDomain: "ucare-74dd0.firebaseapp.com",
  projectId: "ucare-74dd0",
  storageBucket: "ucare-74dd0.appspot.com",
  messagingSenderId: "559052749566",
  appId: "1:559052749566:web:c221508f228a12d17283af",
  measurementId: "G-31JFNGYCVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db}