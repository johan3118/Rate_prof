// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyDCQUcGUfDJiEtJqPFUgFFJV7ruRSiaCcI",
  authDomain: "rate-profesores.firebaseapp.com",
  projectId: "rate-profesores",
  storageBucket: "rate-profesores.appspot.com",
  messagingSenderId: "919208332903",
  appId: "1:919208332903:web:58a43b051483270c600ec2",
  measurementId: "G-ZFJVZBCL2K"
});

// Initialize Firebase
export const auth = firebase.auth()
export default app
