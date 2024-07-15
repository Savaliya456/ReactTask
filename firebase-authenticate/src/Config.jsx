import { initializeApp } from "firebase/app";
import { getAuth,  OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuZ1kwL1Ns3aohFmPnQ9DvbO5hqmLQIHc",
  authDomain: "test-46205.firebaseapp.com",
  databaseURL: "https://test-46205-default-rtdb.firebaseio.com",
  projectId: "test-46205",
  storageBucket: "test-46205.appspot.com",
  messagingSenderId: "926390304993",
  appId: "1:926390304993:web:cea2e4fdf1321de646f7a0",
  measurementId: "G-LFP486H6V4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const microsoftProvider = new OAuthProvider('microsoft.com');

export { auth, microsoftProvider };