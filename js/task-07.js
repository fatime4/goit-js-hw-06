'use strict';

const inputEl = document.querySelector('input');
const textEl = document.querySelector('#text');

const fontSizeChanger = () => {
  textEl.style.fontSize = inputEl.value + 'px';
};

inputEl.addEventListener('input', fontSizeChanger);
