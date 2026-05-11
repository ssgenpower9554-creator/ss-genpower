import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDePC2d62_Y9gnzqN2zcQDU",
  authDomain: "ss-genpower.firebaseapp.com",
  projectId: "ss-genpower",
  storageBucket: "ss-genpower.firebasestorage.app",
  messagingSenderId: "1002801053984",
  appId: "1:1002801053984:web:405ff85c488bc723d69745"
};

const app = initializeApp(firebaseConfig);

export default app;
