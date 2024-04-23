
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD35laqRB6A1et7qFeyyCrf8ujKsY8nIIk",
    authDomain: "hotel-db-1a371.firebaseapp.com",
    projectId: "hotel-db-1a371",
    storageBucket: "hotel-db-1a371.appspot.com",
    messagingSenderId: "321897550966",
    appId: "1:321897550966:web:003e26f3170a3fb90cbb57"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  export { db };