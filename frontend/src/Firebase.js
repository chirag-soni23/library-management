// Import necessary modules from Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0_oiNjWS2g0J-xWyTm-CvHD954dIF6zk",
  authDomain: "library-management-71bf1.firebaseapp.com",
  projectId: "library-management-71bf1",
  storageBucket: "library-management-71bf1.appspot.com",
  messagingSenderId: "251862636909",
  appId: "1:251862636909:web:0199305cbf4faabd966264",
  measurementId: "G-MW679VK7YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
