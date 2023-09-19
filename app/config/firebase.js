// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT0ZBdJKASUOJrDlMYmn9ribTnPnRW078",
  authDomain: "dragndrophng.firebaseapp.com",
  projectId: "dragndrophng",
  storageBucket: "dragndrophng.appspot.com",
  messagingSenderId: "948722948937",
  appId: "1:948722948937:web:d399714e4f5018605e9898",
  measurementId: "G-ZXX8LVJ8K4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
