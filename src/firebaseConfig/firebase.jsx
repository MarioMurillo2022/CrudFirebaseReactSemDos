// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMSlXKFZQ0oAucnUyNdswDCYB47hfyIDU",
    authDomain: "crudfirereact-e0eab.firebaseapp.com",
    databaseURL: "https://crudfirereact-e0eab-default-rtdb.firebaseio.com",
    projectId: "crudfirereact-e0eab",
    storageBucket: "crudfirereact-e0eab.appspot.com",
    messagingSenderId: "885931352285",
    appId: "1:885931352285:web:a9a78ada4cc62fa4557b34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
