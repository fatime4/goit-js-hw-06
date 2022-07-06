'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorName = document.querySelector('.color');

const colorChanger = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
};

btnChangeColorEl.addEventListener('click', colorChanger);
