// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore"; // Si usas Firestore

const firebaseConfig = {
    apiKey: "AIzaSyC9Ut3SArGQnXeIdT7JGH9WZtBfMl0WKeI",
    authDomain: "classdgs.firebaseapp.com",
    projectId: "classdgs",
    storageBucket: "classdgs.appspot.com",
    messagingSenderId: "525282407523",
    appId: "1:525282407523:web:c27f6f2c62bc3f58773456",
    measurementId: "G-PLJ3DVNQMM"
  };


  const app = initializeApp(firebaseConfig);

  // Tipos explícitos para Auth y Firestore
  const auth: Auth = getAuth(app);
  const db: Firestore = getFirestore(app);
  
  export { auth, db };