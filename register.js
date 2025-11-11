
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_YXxNA2AoAv9V9B_rquLwhvCpk0GyprE",
    authDomain: "login-66065.firebaseapp.com",
    projectId: "login-66065",
    storageBucket: "login-66065.firebasestorage.app",
    messagingSenderId: "489232624612",
    appId: "1:489232624612:web:a28110abe7da019df375f1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // submit button
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event){
event.preventDefault()  
alert(5)        
}
)
