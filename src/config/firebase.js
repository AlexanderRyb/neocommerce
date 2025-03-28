

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvuBAX9zUhPZBvxNpjuSqgJqDvU92QNXs",
    authDomain: "neo-commerce.firebaseapp.com",
    projectId: "neo-commerce",
    storageBucket: "neo-commerce.firebasestorage.app",
    messagingSenderId: "1013752271342",
    appId: "1:1013752271342:web:fcfc80551d57f68a277eff",
    measurementId: "G-63VSVVQH1J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };