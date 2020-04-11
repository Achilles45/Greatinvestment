import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9LpEDVVkqatupI39sic5zny4_2RcFXs8",
  authDomain: "great-investment.firebaseapp.com",
  databaseURL: "https://great-investment.firebaseio.com",
  projectId: "great-investment",
  storageBucket: "great-investment.appspot.com",
  messagingSenderId: "544336555625",
  appId: "1:544336555625:web:bba6c2759b8702914c3cf8",
  measurementId: "G-CX6MSZ1YDY"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();