// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: PROCESS.ENV.API_KEY,
  authDomain: PROCESS.ENV.AUTH_DOMAIN,
  projectId: PROCESS.ENV.PROJECT_ID,
  storageBucket: PROCESS.ENV.STORAGE_BUCKET,
  messagingSenderId: PROCESS.ENV.MESSAGING_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// select the input fields
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

// call the onsubmit function
window.signup = (e) => {
  e.preventDefault();
  let data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((success) => alert("Sign Up Successfull"))
    .catch((error) => alert("Error" + error));
  // console.log(data);
};
