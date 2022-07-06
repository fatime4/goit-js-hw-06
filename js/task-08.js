'use strict';

const loginFormEl = document.querySelector('.login-form');

let loginFormAllValues = {};

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' && password.value === '') {
    return alert(`Всі поля повинні бути заповнені!`);
  } else {
    loginFormAllValues.email = email.value;
    loginFormAllValues.password = password.value;
    console.log(loginFormAllValues);
    event.currentTarget.reset();
  }
});
