// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzuuKN340LAjVOIeeaTjGTgKWNwa9IwQQ",
  authDomain: "react-e-shop-411520.firebaseapp.com",
  projectId: "react-e-shop-411520",
  storageBucket: "react-e-shop-411520.appspot.com",
  messagingSenderId: "1070845680407", 
  appId: "1:1070845680407:web:7e4ed56407080f437cf552",
  measurementId: "G-CFX7XSJWHC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;



//  apiKey: "AIzaSyDv56Co3Nc9L191sTzAck9NyMEQU6GEu-A",
