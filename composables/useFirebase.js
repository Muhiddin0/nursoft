import { getApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8zGet40U6xCHNWBTrtgzY8Xuq2K9iC9Q",
  authDomain: "nursoftuz-e1546.firebaseapp.com",
  projectId: "nursoftuz-e1546",
  storageBucket: "nursoftuz-e1546.appspot.com",
  messagingSenderId: "509153009008",
  appId: "1:509153009008:web:81294c9b5df3b2fd3743b5",
  measurementId: "G-JP2YVD5MCS",
};

export default function userFirebase (){
  initializeApp(firebaseConfig)
}