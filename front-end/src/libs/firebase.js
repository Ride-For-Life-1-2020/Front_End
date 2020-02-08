import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDB2lIRegbhDSdq6UDOwqKnrRhkmUgN-C0",
    authDomain: "ride4live-a13bf.firebaseapp.com",
    databaseURL: "https://ride4live-a13bf.firebaseio.com",
    projectId: "ride4live-a13bf",
    storageBucket: "ride4live-a13bf.appspot.com",
    messagingSenderId: "837227962321",
    appId: "1:837227962321:web:339387ad84a58b207c4af0",
    measurementId: "G-X6E7MP201L"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();