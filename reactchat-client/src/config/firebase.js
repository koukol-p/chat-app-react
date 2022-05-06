import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);

export { projectFirestore, projectAuth };
