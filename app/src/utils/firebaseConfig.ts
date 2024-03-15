import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBljL0K_x5YRZc5wN5XEWs6c85-SGQka5U",
  authDomain: "shoppingapp-351006.firebaseapp.com",
  projectId: "shoppingapp-351006",
  storageBucket: "shoppingapp-351006.appspot.com",
  messagingSenderId: "1036511507058",
  appId: "1:1036511507058:web:b99ff7f2808752fa11c8eb",
  measurementId: "G-BNDPN6H97T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};