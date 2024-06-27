import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  apiKey: "",
  authDomain: "savarrior-web.firebaseapp.com",
  projectId: "savarrior-web",
  storageBucket: "savarrior-web.appspot.com",
  messagingSenderId: "",
  appId: ""
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

const storage = getStorage()

export { auth, db,storage };
