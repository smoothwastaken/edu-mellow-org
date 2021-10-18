import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import * as firebase from "firebase/app";

import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBGZVwI3Qgv89i37WfLkzcHf5IZQMeaLa4",
  authDomain: "mellow-dev-5552c.firebaseapp.com",
  projectId: "mellow-dev-5552c",
  storageBucket: "mellow-dev-5552c.appspot.com",
  messagingSenderId: "76554198072",
  appId: "1:76554198072:web:7d21860e326d58b3099acd",
});

// export const db = firebase.firestore();
export const appAuth = getAuth(app);
export const db = getFirestore();
// export default firebase;
