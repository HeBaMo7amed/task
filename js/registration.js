"use strict";
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number');
    let avatarInput = document.querySelector('#avatar-input');
    let registrationError = document.querySelector('#registrationError'); 
    let SigGnUp = document .querySelector ('#SignUp');
    let sinSec =  document.querySelector('#Sinup');
    let logSec =  document.querySelector('#LogInY');
    let homeSec =  document.querySelector('#home');
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    username.addEventListener("click", userNamme);
    email.addEventListener("click",Email);
    password.addEventListener("click",PassWord);
    number.addEventListener("click",phoneNumber);
    SigGnUp.addEventListener("click", function(event){
        event.preventDefault();
        if(userNamme(username.value)  && Email(email.value) && PassWord (password.value) && phoneNumber(number.value)){
           let data ={
            username : username.value,
            email : email.value,
            password : password.value,
            number : number.value 
           };
           users.push(data);
           localStorage.setItem('users', JSON.stringify(users));
           localStorage.setItem('currentUser', JSON.stringify(data)); 
           console.log(data);
            sinSec.style.display = 'none';
            logSec.style.display = 'block';
           
        }
        
    });


let regex =/^(?:[A-Za-z]+|\b[A-Za-z]+\b\s+[A-Za-z\s]*)$/;
function userNamme(username) {
    let userInput = document.querySelector('#username'); 
    if (username.trim() === '') {
        registrationError.textContent = 'Please enter your username';
        userInput.classList.add('is-invalid');
        return false;
    } 
    else if (!regex.test(username)) {
        registrationError.textContent = 'Only English alphabet, number, and an underscore are allowed';
        userInput.classList.add('is-invalid');
        return false;
    } 
    else {
        registrationError.textContent = '';
        userInput.classList.add('is-valid');
        userInput.classList.remove('is-invalid');
        return true ;
    }
}
let validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Email(email) {
    let userEmail = document.querySelector('#email');     
    if (!validateEmail.test(email)) {
        registrationError.textContent = 'Please enter a valid email address';
        userEmail.classList.add('is-invalid');
        return false; 
    } 

    
    if (checkEmailExists(email)) {
        registrationError.textContent = 'This email is already registered';
        userEmail.classList.add('is-invalid');
        return false; 
    } else {
        registrationError.textContent = '';
        userEmail.classList.add('is-valid');
        userEmail.classList.remove('is-invalid');
        return true;
    }
}
function checkEmailExists(email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return true; 
        }
    }
    
    return false; 
}
let validatePassword  = /^(?=.*\d)[A-Za-z\d]{7,}$/;
function PassWord(password){
    let Pass = document.querySelector('#password'); 
    if (password.trim() === '') {
        registrationError.textContent = 'Please enter your password';
       Pass.classList.add('is-invalid');
        return false;
    }
    else if (!validatePassword.test(password)) {
        registrationError.textContent = 'Password must be at least 7 characters long and contain at least one number';
        Pass.classList.add('is-invalid');
        return false;
    }
 else {
    registrationError.textContent = '';
    Pass.classList.add('is-valid');
    Pass.classList.remove('is-invalid');
    return true;
    
}
}
let validatePhoneNumber = /^(011|012|015|010)\d{8}$/;
function phoneNumber(number){
    let Phone = document.querySelector('#number'); 
    if (number.trim() === '') {
        registrationError.textContent = 'Please enter your phone number';
        Phone.classList.add('is-invalid');
        return false;
    }
    else if (!validatePhoneNumber.test(number)) {
        registrationError.textContent = 'Please enter a valid 11 digits phone number that starts with 011, 012, 015, or 010';
        Phone.classList.add('is-invalid');
        return false;
    }
    else  {
        registrationError.textContent = '';
        Phone.classList.add('is-valid');
        Phone.classList.remove('is-invalid');
        return true;
    }
}

document.querySelector("#Message a").addEventListener("click", function(event){
    event.preventDefault();
    sinSec.style.display = 'none';
    logSec.style.display = 'block';
});

