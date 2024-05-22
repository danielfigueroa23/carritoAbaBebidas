import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT4IzGlIQyr0dllkjYCz6NislqXTMfmBY",
  authDomain: "ecommerce-aba.firebaseapp.com",
  projectId: "ecommerce-aba",
  storageBucket: "ecommerce-aba.appspot.com",
  messagingSenderId: "352805991534",
  appId: "1:352805991534:web:e492e36d659eb37084a27f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
