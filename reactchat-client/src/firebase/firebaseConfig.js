import {initializeApp} from "firebase/app";

import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const projectFirestore = getFirestore(app);
export const projectAuth = getAuth(app);