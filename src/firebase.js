/** @format */
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKFkEZnZRZN16pFgRVikLKA_NpJn3INoU",
  authDomain: "expense-track-308f1.firebaseapp.com",
  projectId: "expense-track-308f1",
  storageBucket: "expense-track-308f1.appspot.com",
  messagingSenderId: "633398727706",
  appId: "1:633398727706:web:cb9914ae8db70afac2eda3",
  measurementId: "G-4NNMHV3Z1F",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
