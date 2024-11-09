'use strict';

const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formCode = {
    email: email,
    password: password,
  };
  console.log(formCode);
  form.reset();
});
const holder = document.querySelectorAll('.login-form input');
holder.forEach(input => {
  input.addEventListener('focus', () => {
    input.placeholder = 'Type area';
  });
  input.addEventListener('blur', () => {
    input.placeholder = '';
  });
});
