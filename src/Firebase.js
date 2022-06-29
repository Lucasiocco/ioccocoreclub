// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3OFs76fMbFoEmRp3QRBRDnnZgSsSyqUM",
  authDomain: "thecoreclub.firebaseapp.com",
  projectId: "thecoreclub",
  storageBucket: "thecoreclub.appspot.com",
  messagingSenderId: "1026322287452",
  appId: "1:1026322287452:web:dababa76343b2ab2e54f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = app.firestore();