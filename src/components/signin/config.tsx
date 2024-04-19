// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwpeTPOA0RqcFezY0Rem1t74FyyNEBa2g",
    authDomain: "webdev-4882a.firebaseapp.com",
    projectId: "webdev-4882a",
    storageBucket: "webdev-4882a.appspot.com",
    messagingSenderId: "1066029537251",
    appId: "1:1066029537251:web:68d6651a17fddc2c7832d6",
    measurementId: "G-4RBY5SC35F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
