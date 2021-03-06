import firebase from "firebase/app";
import "firebase/auth";

// types
import { Creds } from "../types";

const configFirebase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const signIn = async ({ email, password }: Creds) => {
  try {
    return await configFirebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    const errorMessage = error.message;
    return errorMessage;
  }
};

export const signUp = async ({ email, password }: Creds) => {
  try {
    return await configFirebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  } catch (error: any) {
    const errorMessage = error.message;
    return errorMessage;
  }
};

export const logOut = () => {
  configFirebase.auth().signOut();
};

export const checkCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unSubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user);
      } else {
        reject();
      }
      unSubscribe();
    });
  });
