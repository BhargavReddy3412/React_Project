 import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVka6J6EcB9l1d3cquZMem4IzhNFCzfhU",
  authDomain: "traveler-authendication.firebaseapp.com",
  databaseURL: "https://traveler-authendication-default-rtdb.firebaseio.com", 
  projectId: "traveler-authendication",
  storageBucket: "traveler-authendication.appspot.com",
  messagingSenderId: "375695830400",
  appId: "1:375695830400:web:a9b9589916c19a69ea6565",
  measurementId: "G-8J9FTEJNPY"
};


export const app = initializeApp(firebaseConfig);
