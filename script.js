'use strict';

function log(event) {
  console.log(`${this.id}: ${event.type}`);
}

function preventButton(event) {
  const prevent = document.querySelector('[name=prevent-button]:checked').value;

  if (this.action === prevent) {
    event.preventDefault();
  }
}

function preventInput(event) {
  const prevent = document.querySelector('[name=prevent-input]:checked').value;

  if (this.action === prevent) {
    event.preventDefault();
  }
}

function main() {
  const buttonEl = document.getElementById('button');
  const inputEl = document.getElementById('input');

  ['click', 'mousedown', 'mouseup'].forEach((action) => {
    buttonEl.addEventListener(action, log, false);
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
    inputEl.addEventListener(action, log, false);
    inputEl.addEventListener(action, preventInput.bind({ action }), false);
  });
}

document.addEventListener('DOMContentLoaded', main);
