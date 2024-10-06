import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2v7kbiS_AqZmGQx4Q2eimuUvjwfmYoxE",
    authDomain: "fintesstracker.firebaseapp.com",
    projectId: "fintesstracker",
    storageBucket: "fintesstracker.appspot.com",
    messagingSenderId: "438281428436",
    appId: "1:438281428436:web:66209a9b90a1093a790a41",
    measurementId: "G-ELYVEEGNLX"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);