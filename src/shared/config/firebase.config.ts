// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj04HdG7lCeVsBpeNRi4XB2H-xS85weOA",
  authDomain: "armstrong-bishkek.firebaseapp.com",
  projectId: "armstrong-bishkek",
  storageBucket: "armstrong-bishkek.firebasestorage.app",
  messagingSenderId: "555228854282",
  appId: "1:555228854282:web:d5e262e3ddcb1694f107f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
