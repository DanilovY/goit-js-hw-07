'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.classList.add('input');
nameInput.addEventListener('input', () => {
  const trimValue = nameInput.value.trim();
  nameOutput.textContent = trimValue === '' ? 'Anonymous' : trimValue;
});
