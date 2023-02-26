// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDk73Z61_wKaJl33ADSY4qixuubXTV7CLg",
  authDomain: "filmselector-8c475.firebaseapp.com",
  projectId: "filmselector-8c475",
  storageBucket: "filmselector-8c475.appspot.com",
  messagingSenderId: "175537708649",
  appId: "1:175537708649:web:eb8cf0f01c2ea585414cf8",
  measurementId: "G-0Q6CPE2SVZ",
};

const firebaseConfigs = {};

const app = initializeApp(firebaseConfig);
firebaseConfigs.app = app;

const db = getFirestore(app);
firebaseConfigs.db = db;

export default firebaseConfigs;
