import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const signIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => console.log(res)) 
    .catch((error) => console.log(error));

  console.log("signIn - ", email, password);
};

export const signUp = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log("signUp - ", email, password);
};

export const LogOut = () => {
  console.log("logOut");
};
