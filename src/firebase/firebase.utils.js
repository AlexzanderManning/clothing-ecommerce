import firebase from 'firebase/app';
//Imports the database and auth
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDjKpOUg4sgmr6ectgn_IgLZ-JnxjszAi0",
  authDomain: "creative-db-408e2.firebaseapp.com",
  databaseURL: "https://creative-db-408e2.firebaseio.com",
  projectId: "creative-db-408e2",
  storageBucket: "creative-db-408e2.appspot.com",
  messagingSenderId: "865776191446",
  appId: "1:865776191446:web:70f8116ae1bbf433078677",
  measurementId: "G-MCRS7XTSMY"
};

firebase.initializeApp(config);

//exporting auth module and firebase module
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting up Google Auth Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;