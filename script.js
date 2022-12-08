const mail = document.querySelector('#mail');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const pw = document.querySelector('#pw');
const pwc = document.querySelector('#pwc');


mail.addEventListener('input', (event) => {
    if(mail.validity.typeMismatch) {
        mail.setCustomValidity('Enter a valid e-mail address');
        mail.reportValidity();
    }
    else {
        mail.setCustomValidity('');
    }
});