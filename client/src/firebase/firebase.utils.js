import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4YqViWa1eFmSKLol49C4Le5mLnA1zp4w",
  authDomain: "crwn-db-bcf83.firebaseapp.com",
  projectId: "crwn-db-bcf83",
  storageBucket: "crwn-db-bcf83.appspot.com",
  messagingSenderId: "794175753789",
  appId: "1:794175753789:web:e0ed76d83a7bf42b516454",
  measurementId: "G-XYJY6MYHJK",
};

export const CreateUserProfileDocument = async (Userauth, AdditionalData) => {
  if (!Userauth) return;

  const UserRef = firestore.doc(`users/${Userauth.uid}`);

  const Snapshot = await UserRef.get();

  if (!Snapshot.exists) {
    const { displayName, email } = Userauth;
    const Createdat = new Date();

    try {
      await UserRef.set({
        displayName,
        email,
        Createdat,
        ...AdditionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return UserRef;
};

firebase.initializeApp(config);

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const convertCollectionSnaphotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
