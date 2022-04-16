// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyBfxju-IZgW8tpPRssI5ihcPHhxNqZKj3g",
  authDomain: "rate-prof-ccc3c.firebaseapp.com",
  databaseURL: "https://rate-prof-ccc3c-default-rtdb.firebaseio.com",
  projectId: "rate-prof-ccc3c",
  storageBucket: "rate-prof-ccc3c.appspot.com",
  messagingSenderId: "778523135010",
  appId: "1:778523135010:web:e9e49e0f93b97ef3158e7b"
}) 

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
export default app




