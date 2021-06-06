
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyBBxLx6e6y0DfHCpKr6WtrZ3ovfUcv2iVw",
  authDomain: "coinpump-b00e5.firebaseapp.com",
  projectId: "coinpump-b00e5",
  storageBucket: "coinpump-b00e5.appspot.com",
  messagingSenderId: "135604075740",
  appId: "1:135604075740:web:eeea64dcede3ecac3c8819",
  measurementId: "G-866ZS9JZ6E"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth, firestore, firebase};