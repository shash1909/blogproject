import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCy3emcJgnnEBMrVBlZmKdvmFcCNI1dz2w",
  authDomain: "blogproject-77f9d.firebaseapp.com",
  projectId: "blogproject-77f9d",
  storageBucket: "blogproject-77f9d.firebasestorage.app",
  messagingSenderId: "951955048888",
  appId: "1:951955048888:web:4cfc71276c7c4c01cd274d",
  measurementId: "G-482H3HKWXJ"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

