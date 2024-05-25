import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM5YugECk_CZwUs9N06FiU5_CH9n-Z_ys",
    authDomain: "orbital24test.firebaseapp.com",
    projectId: "orbital24test",
    storageBucket: "orbital24test.appspot.com",
    messagingSenderId: "363498279106",
    appId: "1:363498279106:web:67c4a991c79d8eedce2b5b",
    measurementId: "G-N3N7PKH63G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
