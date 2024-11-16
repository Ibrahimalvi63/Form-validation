const submitBtn = document.querySelector('#submit-btn');





function validateName(){
    const name = document.querySelector('#name').value;
    const nameError = document.querySelector('#name-error');

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[AA-Za-z]{2,}$/)){
        nameError.innerHTML = 'Enter full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validatePhone(){
    const phone = document.querySelector('#phone').value;
    const phoneError = document.querySelector('#phone-error');

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if(phone.length > 11){
        phoneError.innerHTML = 'Phone num must 11 charc';
        return false;
    }
    if(!phone.match(/^(\d{5}[-.\s]?\d{3}[-.\s]?\d{3})$/)){
        phoneError.innerHTML = 'Invalid phone';
        return false;
    }
    
    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateEmail(){
    const email = document.querySelector('#email').value;
    const emailError = document.querySelector('#email-error');

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Invalid email';
        return false;
    }
    
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validatePassword(){
    const password = document.querySelector('#password').value;
    const passwordError = document.querySelector('#password-error');

    if(password.length == 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if(password.length > 12){
        passwordError.innerHTML = 'Password must 12 charc';
        return false;
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{12}$/)){
        passwordError.innerHTML = 'Invalid password';
        return false;
    }
    
    
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateMessage(){
    const message = document.querySelector('#message').value;
    const messageError = document.querySelector('#message-error');

    if(message.length == 0){
        messageError.innerHTML = 'Fill free to message';
        return true;
    }
    if(message.length < 50){
        messageError.innerHTML = 'write more if you want';
        return true;
    }
    
    
    
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}






submitBtn.addEventListener('click', ()=>{
    ss
    const submitError = document.querySelector('#submit-error');
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateMessage()){
        submitError.innerHTML = 'please fix the error';
        setTimeout(()=>{
            submitError.innerHTML = '';

        },3000);
        return false;
        
    }
    submitError.innerHTML = 'ok';
    setTimeout(()=>{
        submitError.innerHTML = '';
    },3000);
    return true;
})
