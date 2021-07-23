import firebase from "firebase";
import "firebase/auth";

// types
import { Creads } from "../types";

const configFirebase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const signIn = async ({
  email,
  password,
}: Creads) => {
  try {
    return await configFirebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (error) {
    return null;
  }
};

export const signUp = async ({
  email,
  password,
}: Creads) => {
  try {
    return await configFirebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return null;
  }
};

export const logOut = () => {
  configFirebase.auth().signOut();
  console.log("logOut");
};