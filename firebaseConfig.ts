// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7AKKUgLhRyHJZJnu9Sn-r2EBbWIatMk4",
  authDomain: "studieseducation-85345.firebaseapp.com",
  projectId: "studieseducation-85345",
  storageBucket: "studieseducation-85345.firebasestorage.app",
  messagingSenderId: "44175015721",
  appId: "1:44175015721:web:80c1f0e37729002a8cc138",
  measurementId: "G-3SN8VTEB6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)