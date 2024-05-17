// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn9zvT30rqTgahl763arMxz2F7ToWbCCk",
  authDomain: "netflixgpt-6132c.firebaseapp.com",
  projectId: "netflixgpt-6132c",
  storageBucket: "netflixgpt-6132c.appspot.com",
  messagingSenderId: "703625223240",
  appId: "1:703625223240:web:00429ddcdf9be51e298c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }