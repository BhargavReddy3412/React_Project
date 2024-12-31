import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyBMML19o9a2Ko3znHF-XjVnySUBSku_Z0c",
  authDomain: "travelbus-auth.firebaseapp.com",
  projectId: "travelbus-auth",
  storageBucket: "travelbus-auth.firebasestorage.app",
  messagingSenderId: "457373987526",
  appId: "1:457373987526:web:0a36ba06603b36c9feddc7",
  measurementId: "G-GVHLQRMM9B"
};

export const app = initializeApp(firebaseConfig);