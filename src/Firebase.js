import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { productos } from "./components/productos";


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

export const collectionProductos = collection(db, "productos");
