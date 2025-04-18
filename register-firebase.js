// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDahg06SEzRJJH6lM5Yb1EYgfZwK-0hHRQ",
  authDomain: "de-web-bdfd0.firebaseapp.com",
  databaseURL: "https://de-web-bdfd0-default-rtdb.firebaseio.com",
  projectId: "de-web-bdfd0",
  storageBucket: "de-web-bdfd0.firebasestorage.app",
  messagingSenderId: "11558859515",
  appId: "1:11558859515:web:060a07bf4dd1ce7490765e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const username = document.getElementById("username").value;
  const registerEmail = document.getElementById("registerEmail").value;
  const registerPassword = document.getElementById("registerPassword").value;

  // Check for empty inputs
  if (!username || !registerEmail || !registerPassword) {
    alert("Please enter valid username, email, password.");
    return;
  }

  // Sign up with Firebase
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "project.html";
      // Redirect or perform other actions here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Code:", errorCode); // Log the error code
      console.error("Error Message:", errorMessage); // Log the error message
      alert(errorMessage);
    });
});
