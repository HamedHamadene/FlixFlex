 import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDSslNARz5VskkhZbefxt6wCWG7kxhy0BE",
    // authDomain: "fir-auth-4d646.firebaseapp.com",
    projectId: "flixflexrn",
    // storageBucket: "fir-auth-4d646.appspot.com",
    // messagingSenderId: "83001307905",
    appId: "1:588770106023:android:3285d086a8460ad3fb5982"
};

 let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };