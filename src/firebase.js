import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0vBlFsUN4OpeqSw4zfnLzoptTW4Wxy1c",
    authDomain: "slack-alike-22204.firebaseapp.com",
    projectId: "slack-alike-22204",
    storageBucket: "slack-alike-22204.appspot.com",
    messagingSenderId: "143965768705",
    appId: "1:143965768705:web:c9b0682fe3b5884d590400"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth , db, provider}