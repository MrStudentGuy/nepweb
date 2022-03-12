// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCKCaqQBq5AQoJzwkKny8lU9byOog-8bVI",
  authDomain: "nep3-3775e.firebaseapp.com",
  projectId: "nep3-3775e",
  storageBucket: "nep3-3775e.appspot.com",
  messagingSenderId: "648466676529",
  appId: "1:648466676529:web:de8110293fb59e69428e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();

export const getUserName = () => {
  if(auth.currentUser) {
    return auth.currentUser.displayName;
  }
}

