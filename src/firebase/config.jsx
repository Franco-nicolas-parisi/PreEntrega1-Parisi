// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjHN_aDKaPN6A3qSHS8Wb5Z7OklSQ_0o",
  authDomain: "los-tres-pulgosos.firebaseapp.com",
  projectId: "los-tres-pulgosos",
  storageBucket: "los-tres-pulgosos.appspot.com",
  messagingSenderId: "1014274506020",
  appId: "1:1014274506020:web:7a0b9eca092bb4a5b1c7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)