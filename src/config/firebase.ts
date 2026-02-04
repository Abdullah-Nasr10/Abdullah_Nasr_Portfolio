import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVqoeBMyemwsAHEQaomp62J1lQKOtmO8U",
  authDomain: "portfolio-visitors-7441c.firebaseapp.com",
  projectId: "portfolio-visitors-7441c",
  storageBucket: "portfolio-visitors-7441c.firebasestorage.app",
  messagingSenderId: "757209496886",
  appId: "1:757209496886:web:7db64da0f408d597b54797",
};

const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);
