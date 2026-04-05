// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";//step-1
import {getAuth} from "firebase/auth" //step-2
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBOHKGgZ6AH0lzo6GdXs0s3kYv3SwlVpR8",
  authDomain: "auth-react-3efaf.firebaseapp.com",
  projectId: "auth-react-3efaf",
  storageBucket: "auth-react-3efaf.firebasestorage.app",
  messagingSenderId: "205147297336",
  appId: "1:205147297336:web:2517357581dade2043f8cd",
  measurementId: "G-H78B2WQMWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();//step-3
export const db=getFirestore(app)
export default app; //step-4