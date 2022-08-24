//import firebase from 'firebase';
//import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_NLv2u99vZDJAnvvlk8xd4Q9Cwr6noXE",
    authDomain: "fb-clone-41ac6.firebaseapp.com",
    projectId: "fb-clone-41ac6",
    storageBucket: "fb-clone-41ac6.appspot.com",
    messagingSenderId: "781466482048",
    appId: "1:781466482048:web:0c8d0b650c5ec953677d65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const storage = app.storage();

export { db };

