'use strict';

function preventButton(event) {
  const prevent = document.querySelector('[name=prevent-button]:checked').value;

  if (this.action === prevent) {
    event.preventDefault();
  } else {
    console.log(`button: ${event.type}`);
  }
}

function preventInput(event) {
  const prevent = document.querySelector('[name=prevent-input]:checked').value;

  if (this.action === prevent) {
    event.preventDefault();
  } else {
    console.log(`input: ${event.type}`);
  }
}

function main() {
  const buttonEl = document.getElementById('button');
  const inputEl = document.getElementById('input');

  ['click', 'mousedown', 'mouseup'].forEach((action) => {
    buttonEl.addEventListener(action, preventButton.bind({ action }), false);
  });

  [
    'click',
    'mousedown',
    'mouseup',
    'focus',
    'focusin',
    'blur',
    'focusout',
  ].forEach((action) => {
    inputEl.addEventListener(action, preventInput.bind({ action }), false);
  });
}

document.addEventListener('DOMContentLoaded', main);
