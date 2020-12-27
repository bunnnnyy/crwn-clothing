import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4YqViWa1eFmSKLol49C4Le5mLnA1zp4w",
    authDomain: "crwn-db-bcf83.firebaseapp.com",
    projectId: "crwn-db-bcf83",
    storageBucket: "crwn-db-bcf83.appspot.com",
    messagingSenderId: "794175753789",
    appId: "1:794175753789:web:e0ed76d83a7bf42b516454",
    measurementId: "G-XYJY6MYHJK"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;