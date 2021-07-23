import firebase from "firebase/app";
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA4_IqMkB1lYZh6r328AY_BnDmo0ftk5iI",
    authDomain: "simple-notes-firebase-f8689.firebaseapp.com",
    projectId: "simple-notes-firebase-f8689",
    storageBucket: "simple-notes-firebase-f8689.appspot.com",
    messagingSenderId: "856154147070",
    appId: "1:856154147070:web:5f22e4424836d3e9687daf",
    measurementId: "G-324NQER6FT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;