import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD8UnnuPN2aq1As_RjbzPUeKvDSvS2_dMY",
  authDomain: "renovemos-col.firebaseapp.com",
  databaseURL: "https://renovemos-col-default-rtdb.firebaseio.com",
  projectId: "renovemos-col",
  storageBucket: "renovemos-col.appspot.com",
  messagingSenderId: "35221978723",
  appId: "1:35221978723:web:ea1279330dccd3110a0256",
};

// Initialize Firebase

var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
