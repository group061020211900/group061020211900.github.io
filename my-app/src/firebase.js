// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAComZNsOlZOHZl8NUOlsc34EUhXkccns8",
    authDomain: "myprofileinfo-b53f5.firebaseapp.com",
    projectId: "myprofileinfo-b53f5",
    storageBucket: "myprofileinfo-b53f5.appspot.com",
    messagingSenderId: "591188513375",
    appId: "1:591188513375:web:4f5666d61bc133593581ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default getFirestore();