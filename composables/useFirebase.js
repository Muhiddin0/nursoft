import { getApp, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBYuSCFDir4eyBu5xf0fpHgMcVqXnsct1o",
  authDomain: "newslater-3cd4b.firebaseapp.com",
  projectId: "newslater-3cd4b",
  storageBucket: "newslater-3cd4b.appspot.com",
  messagingSenderId: "1098730287106",
  appId: "1:1098730287106:web:a7124612fb927a3bbe371b",
  measurementId: "G-916TQND1R8",
};
export default function userFirebase() {
  initializeApp(firebaseConfig);
}
