// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCQHlB7Kzx_pJ-QMeodMC1_ez-XZAJh-cs",
    authDomain: "net-ninja-marioplan-fb3ec.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-fb3ec.firebaseio.com",
    projectId: "net-ninja-marioplan-fb3ec",
    storageBucket: "",
    messagingSenderId: "40107596368",
    appId: "1:40107596368:web:853f782b7691b039"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;