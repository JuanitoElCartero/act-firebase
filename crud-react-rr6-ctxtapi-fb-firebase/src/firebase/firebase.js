
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3w0-TDxK2jDh8m47Ye_Nv3g5tB-9Z5DE",
  authDomain: "actvidad-50107.firebaseapp.com",
  projectId: "actvidad-50107",
  storageBucket: "actvidad-50107.firebasestorage.app",
  messagingSenderId: "1049949127317",
  appId: "1:1049949127317:web:3e63d19b6ea54c72ed919c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
