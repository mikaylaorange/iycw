import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmydidfjVE6o9ufV5VQQ-9n4NIk2jm_6U",
  authDomain: "iycw-site.firebaseapp.com",
  databaseURL: "https://iycw-site.firebaseio.com",
  projectId: "iycw-site",
  storageBucket: "iycw-site.appspot.com",
  messagingSenderId: "774896827351",
  appId: "1:774896827351:web:6854f0db9be9f27417e992"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestoreRef = firebase.firestore();
export default firestoreRef;