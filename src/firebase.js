import "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "top-picks-ecb7e.firebaseapp.com",
    projectId: "top-picks-ecb7e",
    storageBucket: "top-picks-ecb7e.appspot.com",
    messagingSenderId: "1036569662507",
    appId: "1:1036569662507:web:901e72302521f1f664c66e"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
return firebase.firestore(app);
}