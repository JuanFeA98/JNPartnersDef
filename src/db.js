import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBFHBPNoq1Rg7LBIOB8jJ0g_eL8RvjGNtk",
    authDomain: "jnpartners-1961d.firebaseapp.com",
    projectId: "jnpartners-1961d",
    storageBucket: "jnpartners-1961d.appspot.com",
    messagingSenderId: "760661259065",
    appId: "1:760661259065:web:2388a5753526bc81076ee8",
    measurementId: "G-S4XVMK2V3J"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();