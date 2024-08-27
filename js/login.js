"use strict";
let emailL = document.querySelector('#loginEmail');
let pasSword = document.querySelector('#loginPassword');
let logIInn = document.querySelector('#logInn');
let secLog = document.querySelector('#LogInY');
let secHome = document.querySelector('#home');
let loginError = document.querySelector('#loginError');
let currentUser 

logIInn.addEventListener("click", function(event){
    event.preventDefault();
    if(loginEmail(emailL.value) && PasS(pasSword.value)){
        currentUser = users.find(user => user.email === emailL.value && user.password === pasSword.value);
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            secLog.style.display = 'none';
            secHome.style.display = 'block';
            displayHomePage(currentUser);
        } 
    }
});

function loginEmail(email) {
    currentUser = users.find(user => user.email === email);
    if (!currentUser) {
        loginError.textContent = 'The email is incorrect';
        emailL.classList.add('is-invalid');
        return false;
    } else {
        loginError.textContent = '';
        emailL.classList.add('is-valid');
        emailL.classList.remove('is-invalid');
        return true;
    }
}

function PasS(password) {
    if (currentUser && currentUser.password !== password) {
        loginError.textContent = 'The password is incorrect';
        pasSword.classList.add('is-invalid');
        return false;
    } else {
        loginError.textContent = '';
        pasSword.classList.add('is-valid');
        pasSword.classList.remove('is-invalid');
        return true;
    }
}

function displayHomePage(user) {
    let userNameDisplay = document.querySelector('#userNameDisplay');
    userNameDisplay.textContent = user.username;
}


