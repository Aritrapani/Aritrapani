import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcpIuWszuU8N-A8YdD-fsSuF2Hm_wYNpU",
  authDomain: "slack-clone-e753e.firebaseapp.com",
  projectId: "slack-clone-e753e",
  storageBucket: "slack-clone-e753e.appspot.com",
  messagingSenderId: "820343158395",
  appId: "1:820343158395:web:f9d3f7e1e54f46c17854de",
  measurementId: "G-DDL5251BK5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;