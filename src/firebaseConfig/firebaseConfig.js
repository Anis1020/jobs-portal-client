// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO_01N-1Iwy0yVT-UJZaeSkJaBDz5kb34",
  authDomain: "jobs-portal-610a1.firebaseapp.com",
  projectId: "jobs-portal-610a1",
  storageBucket: "jobs-portal-610a1.firebasestorage.app",
  messagingSenderId: "712557130530",
  appId: "1:712557130530:web:0a81f815aa47c862422b7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
