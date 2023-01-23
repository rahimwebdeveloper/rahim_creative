// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFHRV622vQym6tUW2XwgIuTMahXWmEq7k",
  authDomain: "rahim-creative.firebaseapp.com",
  projectId: "rahim-creative",
  storageBucket: "rahim-creative.appspot.com",
  messagingSenderId: "392054894858",
  appId: "1:392054894858:web:c76aed2daff21fcb604af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export default auth ;
