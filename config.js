// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTJw1WpAhLsK3B_K2wB2UHs0Itq8qIacA",
  authDomain: "perch-c934e.firebaseapp.com",
  projectId: "perch-c934e",
  storageBucket: "perch-c934e.appspot.com",
  messagingSenderId: "365539681644",
  appId: "1:365539681644:web:dd8374b1f8af2978e8ff49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);