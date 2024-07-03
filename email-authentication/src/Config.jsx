import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX0bhhojnNCwlR8HaxVLIudfBlqRectGs",
  authDomain: "project-13-c830c.firebaseapp.com",
  projectId: "project-13-c830c",
  storageBucket: "project-13-c830c.appspot.com",
  messagingSenderId: "483866592377",
  appId: "1:483866592377:web:09e2c2582ec0e4081780a8",
  measurementId: "G-F5903506KD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}