import React, { useContext, useState, useEffect } from "react";
import { appAuth } from "../../pages/_firebase";
import { db } from "../../pages/_firebase";
import { doc, getDoc } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(appAuth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(appAuth, email, password);
  }

  function logout() {
    return signOut(appAuth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(appAuth, email);
  }

  function updateEmail(email) {
    return updateEmail(currentUser, email);
  }

  function updatePassword(password) {
    return updatePassword(currentUser, password);
  }

  function updateName(name) {
    return updateProfile(appAuth, { displayName: name });
  }

  function fetchUserData(data) {
    return readData("userInfos", currentUser.uid, data);
  }

  function sendData(collection, doc, data) {
    try {
      return db.collection(collection).doc(doc).set(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function addData() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getUserInfos(type) {
    const docRef = doc(db, "userInfos", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return await Object.entries(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    const fetchData = async () => {};
  });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateName,
    addData,
    // sendData,
    getUserInfos,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
