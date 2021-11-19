// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0FVpLuPZFTWOLiWfMb_kvQ-IHIN3hS9M",
  authDomain: "react-chat-volley.firebaseapp.com",
  projectId: "react-chat-volley",
  storageBucket: "react-chat-volley.appspot.com",
  messagingSenderId: "736690618606",
  appId: "1:736690618606:web:16cfdd095bb7fc46f4f3ff",
  measurementId: "G-LM7DSW72TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
