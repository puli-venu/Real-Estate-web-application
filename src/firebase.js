import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyB8nUnWkIdVu_dczWzfMe4ndiGgvaJwSnk",
  authDomain: "mern-estate-58f5a.firebaseapp.com",
  projectId: "mern-estate-58f5a",
  storageBucket: "mern-estate-58f5a.appspot.com",
  messagingSenderId: "26241019329",
  appId: "1:26241019329:web:d1fd32ff3d4bcecf2f1340"
};
export const app=initializeApp(firebaseConfig);