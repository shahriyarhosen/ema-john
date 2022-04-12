// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqSYnEXOvxR0DZso-pzFvp-4VZPT82ry8",
  authDomain: "ema-john-6bb0e.firebaseapp.com",
  projectId: "ema-john-6bb0e",
  storageBucket: "ema-john-6bb0e.appspot.com",
  messagingSenderId: "92756695849",
  appId: "1:92756695849:web:822368b1ccbfb7c78c3538",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
