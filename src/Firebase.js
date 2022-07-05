import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA3OFs76fMbFoEmRp3QRBRDnnZgSsSyqUM",
  authDomain: "thecoreclub.firebaseapp.com",
  projectId: "thecoreclub",
  storageBucket: "thecoreclub.appspot.com",
  messagingSenderId: "1026322287452",
  appId: "1:1026322287452:web:dababa76343b2ab2e54f99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);