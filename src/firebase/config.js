
import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC0PP9dFp4olVmmbyZxsTTk8wSOIWzSO2w",
    authDomain: "cooking-ninja-a7ac2.firebaseapp.com",
    projectId: "cooking-ninja-a7ac2",
    storageBucket: "cooking-ninja-a7ac2.appspot.com",
    messagingSenderId: "277497188455",
    appId: "1:277497188455:web:1da102c363fdf8e0a144c2"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore = firebase.firestore()
  
  export { projectFirestore }