import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBi48jPadp2gud9nZFR0y71G_iMurzHs1Q",
  authDomain: "react-netflix-clone-ec224.firebaseapp.com",
  projectId: "react-netflix-clone-ec224",
  storageBucket: "react-netflix-clone-ec224.appspot.com",
  messagingSenderId: "962464025973",
  appId: "1:962464025973:web:989fe347aa1f41aac6973c",
  measurementId: "G-467K0FG2ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);