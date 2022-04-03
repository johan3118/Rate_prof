// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfxju-IZgW8tpPRssI5ihcPHhxNqZKj3g",
  authDomain: "rate-prof-ccc3c.firebaseapp.com",
  databaseURL: "https://rate-prof-ccc3c-default-rtdb.firebaseio.com",
  projectId: "rate-prof-ccc3c",
  storageBucket: "rate-prof-ccc3c.appspot.com",
  messagingSenderId: "778523135010",
  appId: "1:778523135010:web:e9e49e0f93b97ef3158e7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);