import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2GW9oFZ0yhsCL4Z1YTWvyrr6JnzvrODI",
  authDomain: "chevis-414e4.firebaseapp.com",
  projectId: "chevis-414e4",
  storageBucket: "chevis-414e4.appspot.com",
  messagingSenderId: "1040428636456",
  appId: "1:1040428636456:web:83e51c7bec8ffe4caa181d",
  measurementId: "G-BX5XML26W3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
