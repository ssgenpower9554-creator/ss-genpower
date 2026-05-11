import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDePC2d62_Y9gmzqN2QzcQDU38ESJYIrmM",
  authDomain: "ss-genpower.firebaseapp.com",
  projectId: "ss-genpower",
  storageBucket: "ss-genpower.firebasestorage.app",
  messagingSenderId: "1002801053984",
  appId: "1:1002801053984:web:405ff85c488bc723d69745",
  measurementId: "G-6MYNLYXMPG"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;
