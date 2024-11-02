
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBas5qWy8EwQyjkt_eQfWdksj3D1-vY95Q",
  authDomain: "todo-react-e8aec.firebaseapp.com",
  projectId: "todo-react-e8aec",
  storageBucket: "todo-react-e8aec.firebasestorage.app",
  messagingSenderId: "774883756383",
  appId: "1:774883756383:web:2a49be156584a0ebc28eea",
  measurementId: "G-MC07JDJSYV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);