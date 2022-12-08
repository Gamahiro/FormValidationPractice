const mail = document.querySelector('#mail');
const mailError = document.querySelector("#mail + div.error");
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const pw = document.querySelector('#pw');
const pwc = document.querySelector('#pwc');
const form = document.querySelector('form');

console.log(mailError);
console.log(mail);

mail.addEventListener('input', (event) => {
   
    if(mail.validity.valid) {
        mailError.textContent = '';
        mailError.className = 'error';
    } else {
        showError();
    }
});

form.addEventListener('submit', (event) => {
    if (!mail.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (mail.validity.valueMissing) {
        mailError.textContent = 'You need to enter an e-mail address.';
    } else if (mail.validity.typeMismatch) {
        mailError.textContent = 'Entered value needs to be an e-mail address.';
    }else if (mail.validity.tooShort) {
        mailError.textContent = `E-mail should be at least ${mail.minLength} characters; you entered ${mail.value.length}.`;
    }
    mailError.className = 'error active';
}