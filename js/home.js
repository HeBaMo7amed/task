"use strict";
const logoutButton = document.querySelector('#logoutButton');
const homeSec = document.querySelector('#home');
const signUpSec = document.querySelector('#Sinup');
const loginSec = document.querySelector('#LogInY');

logoutButton.addEventListener("click", function() {
    localStorage.removeItem('currentUser'); 
    homeSec.style.display = 'none';
    loginSec.style.display = 'block'; 
});
