import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDNZYIqMqTCPqs1cn1a4qakhOnsg4imIhM',
  authDomain: 'stop-go-continue.firebaseapp.com',
  databaseURL: 'https://stop-go-continue.firebaseio.com',
  projectId: 'stop-go-continue',
  storageBucket: 'stop-go-continue.appspot.com',
  messagingSenderId: '247132812642'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
