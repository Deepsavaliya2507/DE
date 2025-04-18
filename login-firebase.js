// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (submit) {
    //  javascript
    submit.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent page reload

      // Get input values
      const email = emailInput.value;
      const password = passwordInput.value;

      // Check for empty inputs
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Sign in with Firebase
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.location.href = "project.html"; // Redirect to dashboard
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error Code:", errorCode); // Log the error code
          console.error("Error Message:", errorMessage); // Log the error message
          alert(errorMessage);
        });
    });
  } else {
    console.error("Submit button not found!");
  }
});
