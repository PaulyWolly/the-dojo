import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "react-firebase-dojo-6c824.firebaseapp.com",
  projectId: "react-firebase-dojo-6c824",
  storageBucket: "react-firebase-dojo-6c824.appspot.com",
  messagingSenderId: "151978780539",
  appId: "1:151978780539:web:bb738538a76b909568bfde",
  measurementId: "G-H4K5B6TN3B"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage }