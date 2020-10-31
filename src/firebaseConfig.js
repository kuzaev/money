import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4M73e6JjiekqkQUV2VhWZrmELAlwI6w0",
  authDomain: "money-97ae4.firebaseapp.com",
  databaseURL: "https://money-97ae4.firebaseio.com",
  projectId: "money-97ae4",
  storageBucket: "money-97ae4.appspot.com",
  messagingSenderId: "175701221586",
  appId: "1:175701221586:web:e24703eee7fa39b4b50d0b",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
