// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYRmmdSZD6wcSGcAgptDKeTZ3TqWVzCd4",
  authDomain: "vite-contact-c0b80.firebaseapp.com",
  projectId: "vite-contact-c0b80",
  storageBucket: "vite-contact-c0b80.appspot.com",
  messagingSenderId: "237716239520",
  appId: "1:237716239520:web:5949e0c8920f6e600085c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 