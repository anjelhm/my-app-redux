import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyARTeU5lDrdeRZoFbBSOPJogrD5RNOxmA8",
  authDomain: "dolphin-d2832.firebaseapp.com",
  databaseURL: "https://dolphin-d2832.firebaseio.com",
  projectId: "dolphin-d2832",
  storageBucket: "dolphin-d2832.appspot.com",
  messagingSenderId: "895457556334"
};

firebase.initializeApp(config);

export default firebase;

export const firebaseStorage = firebase.storage();
export const firebaseRef = firebase.database().ref();
export const firebaseAuth = firebase.auth();
