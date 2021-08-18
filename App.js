import React, { useEffect } from "react";
import Navigations from "./src/navigation/Navigations";
import { firebaseApp } from "./src/utils/firebase";
//import firebase from "firebase";

export default function App() {
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user, "USER NULL");
  //   });
  // }, []);
  return <Navigations />;
}
