import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDAaaISH0uBn-efxnBt9PvaiyAjsbp5y-E",
    authDomain: "ilch-site.firebaseapp.com",
    projectId: "ilch-site",
    storageBucket: "ilch-site.firebasestorage.app",
    messagingSenderId: "334580681858",
    appId: "1:334580681858:web:1e8aad5df014d85935789b",
    measurementId: "G-DMDFQ1EYYV"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);