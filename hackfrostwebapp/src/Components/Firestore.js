import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

//Firebase Cinoigurantie instellen en doorsturen 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
    apiKey: "AIzaSyAXfHgDEPKf9pem_6UpHxbw_YZ2RqpcCzM",
    authDomain: "hackfrostwebapp.firebaseapp.com",
    projectId: "hackfrostwebapp",
    storageBucket: "hackfrostwebapp.appspot.com",
    messagingSenderId: "812491169380",
    appId: "1:812491169380:web:12c64ae5ccd37377d58971",
    measurementId: "G-GQ6FLF4PNW"
  };

//Database starten
firebase.initializeApp(FirebaseConfig);

//exporteren van de pagina
export default firebase;
