import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF6BSiE6vko3jOoYcHuGI0tbEQbdOWG9Y",
    authDomain: "nelson-messaging.firebaseapp.com",
    databaseURL: "https://nelson-messaging.firebaseio.com",
    projectId: "nelson-messaging",
    storageBucket: "nelson-messaging.appspot.com",
    messagingSenderId: "433143819916",
    appId: "1:433143819916:web:7e277a2f1d294baeab95a9",
    measurementId: "G-34GR3WRXX5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // Explicitly export
  export {auth, provider};
  // Implicitly export
  export default db;