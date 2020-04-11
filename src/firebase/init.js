import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQ_t4jyfguCf_irrFcUtlUVZlCo4d4pp0",
    authDomain: "investment-b4ce5.firebaseapp.com",
    databaseURL: "https://investment-b4ce5.firebaseio.com",
    projectId: "investment-b4ce5",
    storageBucket: "investment-b4ce5.appspot.com",
    messagingSenderId: "512890688581",
    appId: "1:512890688581:web:864b50044833db246cbf2c",
    measurementId: "G-5JQYYB4S2E"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();