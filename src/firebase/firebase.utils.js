import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpc1RMIeQVIQHBdLQN2k_xs6KlDgRG3Qk",
    authDomain: "myshop-db-3e9a2.firebaseapp.com",
    databaseURL: "https://myshop-db-3e9a2.firebaseio.com",
    projectId: "myshop-db-3e9a2",
    storageBucket: "myshop-db-3e9a2.appspot.com",
    messagingSenderId: "639058809935",
    appId: "1:639058809935:web:c82559386f61cdf9db863a",
    measurementId: "G-8LGY3VEHWP"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
          console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;