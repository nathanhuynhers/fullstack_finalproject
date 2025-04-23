import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCuT1tnGYGEBPaa2anCxz6LW7vJLALjLhM",
    authDomain: "wonderpet-2ca92.firebaseapp.com",
    projectId: "wonderpet-2ca92",
    storageBucket: "wonderpet-2ca92.firebasestorage.app",
    messagingSenderId: "347164563724",
    appId: "1:347164563724:web:8ba4a037b925440ecb1129",
    measurementId: "G-L49X56N5Z4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
