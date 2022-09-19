// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE9OKWsLxKqxR7W9RfLvJMK3wTPvMSwpU",
  authDomain: "chat-13b76.firebaseapp.com",
  projectId: "chat-13b76",
  storageBucket: "chat-13b76.appspot.com",
  messagingSenderId: "147765165650",
  appId: "1:147765165650:web:07ff166c47ebbb13bf298b"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
