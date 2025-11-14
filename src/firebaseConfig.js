// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvavk0h0eJJsWtZjWWjUizGp0x_VLDsUM",
  authDomain: "e-commerce-e9264.firebaseapp.com",
  projectId: "e-commerce-e9264",
  storageBucket: "e-commerce-e9264.firebasestorage.app",
  messagingSenderId: "80734306245",
  appId: "1:80734306245:web:83d7150bd2758ccb4e15ac",
  measurementId: "G-YGB7JFTJ13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 

