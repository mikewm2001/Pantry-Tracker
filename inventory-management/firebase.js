// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVj_6p_-H6iiWDaH4VznfOT7cTyEfvjBI",
  authDomain: "inventory-management-51a9e.firebaseapp.com",
  projectId: "inventory-management-51a9e",
  storageBucket: "inventory-management-51a9e.appspot.com",
  messagingSenderId: "203784332615",
  appId: "1:203784332615:web:587e9bb4bb7543c6c69862",
  measurementId: "G-8Q4NB2TTVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};