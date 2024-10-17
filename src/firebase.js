
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpG6X6BeK5G0dOCO2h2QNSJzMZOX41g7A",
  authDomain: "cini-13521.firebaseapp.com",
  projectId: "cini-13521",
  storageBucket: "cini-13521.appspot.com",
  messagingSenderId: "1018367383872",
  appId: "1:1018367383872:web:dfc8ae39b929e5849dc2a5",
  measurementId: "G-NF1P5Y20C0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);