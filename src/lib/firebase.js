
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-42a78.firebaseapp.com",
  databaseURL: "https://reactchat-42a78-default-rtdb.firebaseio.com",
  projectId: "reactchat-42a78",
  storageBucket: "reactchat-42a78.appspot.com",
  messagingSenderId: "692973222681",
  appId: "1:692973222681:web:8388231f3dba359996e388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
