// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFfZpwxu7kfhz1g3ttyVa6bxQjG4GHRz0",
  authDomain: "facepalm360-d4f6f.firebaseapp.com",
  projectId: "facepalm360-d4f6f",
  storageBucket: "facepalm360-d4f6f.appspot.com",
  messagingSenderId: "669363400858",
  appId: "1:669363400858:web:9cd99df69a37f7bb772f23",
  measurementId: "G-4LFBH0H0LC",
  databaseURL:
    "https://facepalm360-d4f6f-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const realtimeDb = getDatabase(app);
