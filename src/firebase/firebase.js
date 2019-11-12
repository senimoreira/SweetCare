
import * as firebase from 'firebase'

    const firebaseConfig = {
        apiKey: "AIzaSyB3t1dZNekQcv5m2KqwLRSddHP9BNQcz_8",
        authDomain: "sweetcare-66ff0.firebaseapp.com",
        databaseURL: "https://sweetcare-66ff0.firebaseio.com",
        projectId: "sweetcare-66ff0",
        storageBucket: "sweetcare-66ff0.appspot.com",
        messagingSenderId: "744718778488"
      };


export const firebaseImpl = firebase.initializeApp(firebaseConfig);

