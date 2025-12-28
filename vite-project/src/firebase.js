import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB__exu5zQAKTeaTI8NwBrcIFgkXmRNZqs",
  authDomain: "project-final-matias-savio.firebaseapp.com",
  projectId: "project-final-matias-savio",
  storageBucket: "project-final-matias-savio.firebasestorage.app",
  messagingSenderId: "260942439242",
  appId: "1:260942439242:web:db0c7945d3cfab110cd7b3",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
