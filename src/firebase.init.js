// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC75O3xDtTn4LezBpc4r3nLazIxwHG638k",
  authDomain: "genius-car-services-23752.firebaseapp.com",
  projectId: "genius-car-services-23752",
  storageBucket: "genius-car-services-23752.appspot.com",
  messagingSenderId: "220326305",
  appId: "1:220326305:web:6bee96d5929dd7c07b03e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
