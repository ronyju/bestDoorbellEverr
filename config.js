import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import 'firebase/compat/storage';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCs4Gdneaz-u5PYBmIkmR6UkDbCM1RXOQc",
    authDomain: "doorbell2-d3381.firebaseapp.com",
    projectId: "doorbell2-d3381",
    storageBucket: "doorbell2-d3381.appspot.com",
    messagingSenderId: "674749422871",
    appId: "1:674749422871:web:6054884aadacef26456b52",
    measurementId: "G-H1LB3DQRW7"
};

if(!firebase.app.lenght){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};