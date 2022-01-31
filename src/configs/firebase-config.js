import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDnIGqBwyP_ehBzpwHjUOeXOCnsQ69MKHY",
  authDomain: "project-tracker-2022.firebaseapp.com",
  projectId: "project-tracker-2022",
  storageBucket: "project-tracker-2022.appspot.com",
  messagingSenderId: "498457797313",
  appId: "1:498457797313:web:5fa531624b94284b37aa40",
  measurementId: "G-CG9XZPW1W6"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase