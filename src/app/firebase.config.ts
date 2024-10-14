// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKZFMn4yRCFyGNeLXbzF1be6_JG1oVtzw",
  authDomain: "photo-studio-86e3c.firebaseapp.com",
  projectId: "photo-studio-86e3c",
  storageBucket: "photo-studio-86e3c.appspot.com",
  messagingSenderId: "970043389283",
  appId: "1:970043389283:web:048d21ff3f8dc059444f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);