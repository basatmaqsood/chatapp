import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbNyJ1wHkOOSA9pUFYsLJZ_TFUZbF-7j4",
  authDomain: "chatapp-80125.firebaseapp.com",
  projectId: "chatapp-80125",
  storageBucket: "chatapp-80125.appspot.com",
  messagingSenderId: "652248129210",
  appId: "1:652248129210:web:a734dbeba4b2db0a836c83",
  measurementId: "G-JH8R4H48VT",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);

