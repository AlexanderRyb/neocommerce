import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJumNoH6-hLUdSj0IDMt4ov7Nb2kHNMY4",
  authDomain: "n-commerce-67fe5.firebaseapp.com",
  projectId: "n-commerce-67fe5",
  storageBucket: "n-commerce-67fe5.firebasestorage.app",
  messagingSenderId: "921934839416",
  appId: "1:921934839416:web:3143590a8e37db012d378d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);