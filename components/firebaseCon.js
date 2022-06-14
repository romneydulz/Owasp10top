import firebase from 'firebase/compat/app';

import 'firebase/compat/database';
import 'firebase/compat/auth';

let  firebaseConfig = {

    apiKey: "AIzaSyCbjlCc8pzeO5wOk1lhZ0z5-iVMfl_huNI",
    authDomain: "projetomobile-a335f.firebaseapp.com",
    projectId: "projetomobile-a335f",
    storageBucket: "projetomobile-a335f.appspot.com",
    messagingSenderId: "889981101947",
    appId: "1:889981101947:web:214b882f89f605480bffde"

  };

  // Initialize 
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 export default firebase;
  