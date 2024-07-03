import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvgqNkxBfGEn50bFlAM4bUfoRQtSCTirs",
  authDomain: "auth-task-9ca7d.firebaseapp.com",
  projectId: "auth-task-9ca7d",
  storageBucket: "auth-task-9ca7d.appspot.com",
  messagingSenderId: "539160645715",
  appId: "1:539160645715:web:2cae21b57e49622a8ab6a6",
  measurementId: "G-PMQ6W47SZG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}