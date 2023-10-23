// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kejVn0kMJxcZrEfk6GuCr1xRIhqOVy4",
  authDomain: "muhiddin-92eab.firebaseapp.com",
  projectId: "muhiddin-92eab",
  storageBucket: "muhiddin-92eab.appspot.com",
  messagingSenderId: "995162671857",
  appId: "1:995162671857:web:cdd63d1183d74fccb57750",
  measurementId: "G-CM6TNMCYTN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);