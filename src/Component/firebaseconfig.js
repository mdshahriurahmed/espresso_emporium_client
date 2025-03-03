// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCduIN8z60IXKA6I4l8QRbLI5wr3WEqPuQ",
    authDomain: "espressoemporium-ed1c4.firebaseapp.com",
    projectId: "espressoemporium-ed1c4",
    storageBucket: "espressoemporium-ed1c4.firebasestorage.app",
    messagingSenderId: "530485276875",
    appId: "1:530485276875:web:eae090ecc1828a731b2b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;