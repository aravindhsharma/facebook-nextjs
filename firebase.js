import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxefXlPZ29TKx_Zcvt1XtgULz3Sq_pyaY",
  authDomain: "facebook-arav.firebaseapp.com",
  projectId: "facebook-arav",
  storageBucket: "facebook-arav.appspot.com",
  messagingSenderId: "826990436619",
  appId: "1:826990436619:web:07922789b107776e5e820e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
