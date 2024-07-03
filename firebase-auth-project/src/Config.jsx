// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQhy5WBz94OEhOwFEtaPGTRAvo5pOjXzo",
  authDomain: "authproject-e3f2d.firebaseapp.com",
  projectId: "authproject-e3f2d",
  storageBucket: "authproject-e3f2d.appspot.com",
  messagingSenderId: "717797166452",
  appId: "1:717797166452:web:beb870e9b75f1647d1f021",
  measurementId: "G-BT5T1F8V7N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}