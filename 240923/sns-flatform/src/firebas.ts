import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY2_IWbt_cH0_dfkWKvAbiYgQnnkgq4zY",
  authDomain: "sns-platform-40e66.firebaseapp.com",
  projectId: "sns-platform-40e66",
  storageBucket: "sns-platform-40e66.appspot.com",
  messagingSenderId: "1093689411501",
  appId: "1:1093689411501:web:54c9c847c5dd0d8b7a0324",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
