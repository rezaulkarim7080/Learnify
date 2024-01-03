
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyATcK0w-1UBVHVuQ4SVvxvTainasfCT9lE",
    authDomain: "learnify-28-dec-23.firebaseapp.com",
    projectId: "learnify-28-dec-23",
    storageBucket: "learnify-28-dec-23.appspot.com",
    messagingSenderId: "95530889482",
    appId: "1:95530889482:web:1a5783f9d1d68f30028af3",
    measurementId: "G-BXZYGBRK47"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
