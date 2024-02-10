// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCWFW4n3Di65PNOi1az-S0wsQ2FRIbx68",
  authDomain: "enjoy-todolist.firebaseapp.com",
  projectId: "enjoy-todolist",
  storageBucket: "enjoy-todolist.appspot.com",
  messagingSenderId: "420417356672",
  appId: "1:420417356672:web:e6238a43363e528b017765"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
export { firebaseApp, auth }