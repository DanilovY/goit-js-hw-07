'use strict';

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100.');
  }

  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);