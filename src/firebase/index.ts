import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getDatabase } from "firebase/database";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
const databasesRef = firebase.database().ref();
export const postsRef = databasesRef.child("posts");
export const database = getDatabase();

export const firebaseAppAuth = firebase.auth();
export const googleLoginProvider = new firebase.auth.GoogleAuthProvider();
export const providers = {
  auth: firebaseAppAuth,
  googleLoginProvider: new firebase.auth.GoogleAuthProvider(),
  facebookLoginProvider: new firebase.auth.FacebookAuthProvider(),
  emailAuthProvider: new firebase.auth.EmailAuthProvider(),
};
export default firebase;
