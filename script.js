const mail = document.querySelector('#mail');
const mailError = document.querySelector("#mail + div.error");

const country = document.querySelector('#country');
const countryError = document.querySelector('#country + div.error');

const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + div.error');

const pw = document.querySelector('#pw');
const pwError = document.querySelector('#pw + div.error');

const pwc = document.querySelector('#pwc');
const pwcError = document.querySelector('#pwc + div.error');

const form = document.querySelector('form');


function initEvents() {
    mail.addEventListener('input', (event) => {
   
        if(mail.validity.valid) {
            mailError.textContent = '';
            mailError.className = 'error';
        } else {
            showMailError();
        }
    });

    country.addEventListener('input', (event) => {
        if((country.value.length > 2) || (/\d/.test(country.value) === false)) {
            showCountryError();
        } else {
            countryError.textContent = '';
            countryError.className = 'error';
        }
    });

 zip.addEventListener('input', (event) => {
    //can enter e - . +
    if((zip.value.length > 5) || (zip.value.toString().includes('e')) || (zip.value.includes('-'))) {
        showZipError();
    } 
    else {
        zipError.textContent = '';
        zipError.className = '';
    }
 });

 pw.addEventListener('input', (event) => {
    if(pw.validity.valid) {
        pwError.textContent = '';
        pwError.className = 'error';
    } else {
        showPwError();
    }
 });

 pwc.addEventListener('input', (event) => {
    if(pwc.value != pw.value) {
        showPwcError();
    } else {
        pwcError.textContent = '';
        pwcError.className = 'error';
    }
 })

    form.addEventListener('submit', (event) => {
        if (!mail.validity.valid) {
            showMailError();
            event.preventDefault();
        }
    });

}


function showMailError() {
    if (mail.validity.valueMissing) {
        mailError.textContent = 'You need to enter an e-mail address.';
    } else if (mail.validity.typeMismatch) {
        mailError.textContent = 'Entered value needs to be an e-mail address.';
    }else if (mail.validity.tooShort) {
        mailError.textContent = `E-mail should be at least ${mail.minLength} characters; you entered ${mail.value.length}.`;
    }
    mailError.className = 'error active';
}
function showCountryError() {
    if (country.value.length < 2) {
        countryError.textContent = 'You need to enter a country';
    } else if (/\d/.test(country.value) === true) {
        countryError.textContent = 'You cannot use numbers in a countries name';
    }
    countryError.className = 'error active';
}
function showZipError() {
    if(zip.value.length > 5) {
        zipError.textContent = 'Maximum 5 digits';
    }
    else if(zip.value.includes('e') || (zip.value.includes('-')))  {
        zipError.textContent = 'Only numbers are accepted for a zip code';
    }
    zipError.className = 'error active';
}
function showPwError() {
    if(pw.validity.valueMissing) {
        pwError.textContent = 'You need to enter a password';
    }
    pwError.className = 'error active';
}
function showPwcError() {
    if(pwc.value != pw.value) {
        pwcError.textContent = 'You need to enter the same password again.';
    }
    pwcError.className = 'error active';
}


initEvents();