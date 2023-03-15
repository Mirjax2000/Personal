/** @format */

let form = document.getElementById('form');
let email = document.getElementById('email');
let oops = document.querySelector('.oops');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = email.value.trim();

    if (emailValue === '') {
        oops.className = 'oops error';
    } else if (!isEmail(emailValue)) {
        console.log(emailValue);
        oops.className = 'oops error';
        oops.textContent = 'Oops! Please check your email';
    } else {
        oops.className = 'oops';
        console.log(emailValue);
        oops.className = 'oops succes';
        oops.textContent = 'Thank you';
        email.value = '';
    }
});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

form.addEventListener('input', function () {
    oops.className = 'oops';
});
