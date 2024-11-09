'use strict';

const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
});
