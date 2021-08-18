import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDw_38xxSDRlgt2i7HDA5RttyR-l5QAnlQ",
  authDomain: "ui-card-2f37b.firebaseapp.com",
  projectId: "ui-card-2f37b",
  storageBucket: "ui-card-2f37b.appspot.com",
  messagingSenderId: "156240494562",
  appId: "1:156240494562:web:741e8edab3756fab5403bb",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
