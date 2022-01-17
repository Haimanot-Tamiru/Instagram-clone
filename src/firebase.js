import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDigRJbKaFK613jKjb9uhrnjSYhCiD0cRg",
  authDomain: "my-instagram-clone-21.firebaseapp.com",
  projectId: "my-instagram-clone-21",
  storageBucket: "my-instagram-clone-21.appspot.com",
  messagingSenderId: "1019668188412",
  appId: "1:1019668188412:web:ee6342fc5a200d6b585b79",
  measurementId: "G-S53BBZWX0K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };