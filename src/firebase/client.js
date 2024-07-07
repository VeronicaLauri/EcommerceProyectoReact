import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDb5HCm86m_N8uLy2YYgb_2-E_CMRw_8eM",
    authDomain: "ecommerce-swiftly-react.firebaseapp.com",
    projectId: "ecommerce-swiftly-react",
    storageBucket: "ecommerce-swiftly-react.appspot.com",
    messagingSenderId: "819042664764",
    appId: "1:819042664764:web:c432ea97382b7ad56d5e39"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);