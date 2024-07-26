alert('hello');
console.log('tedm');

function validateForm(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("Confirm-password").value;
    let number = document.getElementById("number").value;

    let usernameError = document.getElementById("username-error");
    let emailError =document.getElementById("email-error");
    let PasswordError = document.getElementById("password-error");
    let ConfirmPasswordError = document.getElementById("Confirm-password-error");
    let numberError= document.getElementById("number-error")
    let isValid = true;

    // userName validation.
    if(username.trim()===""){
        usernameError.textContent ="username is required";
        usernameError.style.display="block";
        isValid= false;

    }else{
        usernameError.style.display="none";
    }

    //email validation.

    if(email.trim()===""){
        email.textContent ="Email is required";
        email.style.display="block";
        isValid= false;

    }else if(!validateEmail(email)){
        emailError.textContent= "please enter a valid email address example@gmail.com ";
        emailError.style.display="block";
        isValid = false;
    }else{
        emailError.style.display="none";
    }

    if(Password.trim()===""){
        Password.textContent="password required";
        Password.style.display="block";
        isValid = false;
    }else if(Password.length < 8 || Password.length >8 ){
        PasswordError.textContent="password must not be less than 8 characters long and not be more than 8 characters long ";
        PasswordError.style.display="block";
        isValid = false;
    
    }else{
        PasswordError.style.display="none";
    }
    
    if(ConfirmPassword.trim()===""){
        ConfirmPassword.textContent="Confirm Password required";
        ConfirmPassword.style.display="block";
        isValid = false;
    }else if(Password.length < 8 || Password.length >8 ){
        PasswordError.textContent="password do not match ";
        PasswordError.style.display="block";
        isValid = false;
    
    }else{
        PasswordError.style.display="none";
    }

    if(number.trim()===""){
        number.textContent=" Phone number required";
        number.style.display="block";
        isValid = false;
    }else if(number.length <= 0 && number.length >9 ){
        numberError.textContent="invalid phone number  ";
        numberError.style.display="block";
        isValid = false;
    
    }else{
        numberError.style.display="none";
    }sssss


    return isValid;
}

// function validateEmail(email) {
//     const re=
// }








