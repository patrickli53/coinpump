
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();

export const generateUserDocument = async (user) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot =  await userRef.get();
  console.log("omar" , snapshot)

  if (!snapshot.exists){
    const { email } = user;
    try {
      await userRef.set({
        email,
        tokens: {}
      });
    } catch (error) {
      console.log(error);
    }
  }
  return getUserDocument(user.uid)
};



const getUserDocument = async (uid) => {
  if (!uid) return null;
  try{
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {uid, ...userDocument.data()};
  } catch(error) {
      console.log(error);
  }
  }
  



export {auth, firestore, firebase, google};