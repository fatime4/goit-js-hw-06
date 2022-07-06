'use strict';

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const OnDecrementBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', OnDecrementBtnClick);

const OnIncrementBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', OnIncrementBtnClick);
