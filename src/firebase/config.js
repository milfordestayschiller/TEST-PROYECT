import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUznTZUKLkz4chjf4bXNC3iIy5M_BBkMI",
    authDomain: "ivodev-ecommerce.firebaseapp.com",
    projectId: "ivodev-ecommerce",
    storageBucket: "ivodev-ecommerce.appspot.com",
    messagingSenderId: "239785739972",
    appId: "1:239785739972:web:a22ce7de0266ceb2c5eb91"
  };
  
  // Initialize Firebase
  const fb = initializeApp(firebaseConfig);
  const db = getFirestore(fb);

  export {db};
