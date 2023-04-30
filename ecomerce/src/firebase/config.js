
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAF3RhnddrOSYT5D114cNfMmXVlObJpEAs",
  authDomain: "ecommerce-59fe4.firebaseapp.com",
  projectId: "ecommerce-59fe4",
  storageBucket: "ecommerce-59fe4.appspot.com",
  messagingSenderId: "621947120212",
  appId: "1:621947120212:web:005a8476c71741137ddbc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const initFirebase = () => app
