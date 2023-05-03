// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkt-4L2s12EC7-jCep_gzh_mZcEOAJGXE",
  authDomain: "ecommerce-39650.firebaseapp.com",
  projectId: "ecommerce-39650",
  storageBucket: "ecommerce-39650.appspot.com",
  messagingSenderId: "616226127644",
  appId: "1:616226127644:web:0b3c2aea79562b037c04d9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)