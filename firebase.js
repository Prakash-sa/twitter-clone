// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVyCH2DoTRJQ2-0X7fP250U06foP2fPbM",
  authDomain: "twitter-clone-1562d.firebaseapp.com",
  projectId: "twitter-clone-1562d",
  storageBucket: "twitter-clone-1562d.appspot.com",
  messagingSenderId: "5939840225",
  appId: "1:5939840225:web:421d37358688144010e3a0",
  measurementId: "G-W5WV23N9N5"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };