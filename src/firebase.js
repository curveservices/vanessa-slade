import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDESdkGQmnO3Dzpe1OxbkKYf41oD5rd9A8",
    authDomain: "telegraph-tutoring.firebaseapp.com",
    projectId: "telegraph-tutoring",
    storageBucket: "telegraph-tutoring.appspot.com",
    messagingSenderId: "189709525863",
    appId: "1:189709525863:web:09b2b993718903291bc5c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)