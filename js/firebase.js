// js/firebase.js
// -----------------------------------------------------------------
// PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE
// (Consola de Firebase > Configuración del proyecto > Tus apps > SDK config)
// -----------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PEGA_TU_API_KEY",
  authDomain: "PEGA_TU_AUTH_DOMAIN",
  projectId: "PEGA_TU_PROJECT_ID",
  storageBucket: "PEGA_TU_STORAGE_BUCKET",
  messagingSenderId: "PEGA_TU_SENDER_ID",
  appId: "PEGA_TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  serverTimestamp
};
