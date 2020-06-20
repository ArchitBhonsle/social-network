import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey            : 'AIzaSyAXBNF5nHxpLAHZK3BLM1Cs2EfR49m3Suk',
  authDomain        : 'social-network-pui.firebaseapp.com',
  databaseURL       : 'https://social-network-pui.firebaseio.com',
  projectId         : 'social-network-pui',
  storageBucket     : 'social-network-pui.appspot.com',
  messagingSenderId : '686702589291',
  appId             : '1:686702589291:web:8314f2fc68cd42e19d082e',
  measurementId     : 'G-7WYDBWMQ9M'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
