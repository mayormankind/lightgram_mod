import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDpa3RDkJV3CPwGUXwD7s4wYAV1ddtVvU0",
  authDomain: "lightgram-mod.firebaseapp.com",
  projectId: "lightgram-mod",
  storageBucket: "lightgram-mod.appspot.com",
  messagingSenderId: "255138188045",
  appId: "1:255138188045:web:e7e90c99b73724a1233e44"
};
const app = initializeApp(firebaseConfig);

export default app;