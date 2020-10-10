import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFGEf2TGZK0-Xlt1QIDmht29NPGn_3Uqs",
  authDomain: "slack-clone-cc036.firebaseapp.com",
  databaseURL: "https://slack-clone-cc036.firebaseio.com",
  projectId: "slack-clone-cc036",
  storageBucket: "slack-clone-cc036.appspot.com",
  messagingSenderId: "291356770834",
  appId: "1:291356770834:web:46975d3e177204b4cfcecb",
  measurementId: "G-GG6XMM0E1D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
