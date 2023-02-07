const form = document.querySelector('form');
const input = document.querySelector('input[type=text]');
const errorField = document.querySelector('.email-error-field');
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const email = input.value;
    if(ValidateEmail(email)){
        location.replace('/subscribed.html')
    }else if(email.trim().length === 0){
        input.style.borderColor= 'red';
        errorField.innerHTML = 'Whoops! It looks like you forgot to add your email';
    }
    else{
        input.style.borderColor= 'red';
        errorField.innerHTML = 'Please provide a valid email address'
    }

})



