'use strict';


/*

- How to close modal by clicking outside modal

*/

const showModalEventHandler = () => {
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  const overlay = document.querySelector(".overlay");


  body.appendChild(overlay);
  modal.classList.remove('hidden');
  modal.classList.add('show-modal');

  overlay.classList.remove('hidden');
}

const closeModalEventHandler = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  modal.classList.add('hidden');
  modal.classList.remove('show-modal');
  overlay.classList.add('hidden');
  // overlay.remove();
}

const modalButtons = document.querySelectorAll('.show-modal');
modalButtons.forEach(button => button.addEventListener('click', showModalEventHandler));

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', closeModalEventHandler);

const modalOverlay = document.querySelector('.overlay');
modalOverlay.addEventListener('click', closeModalEventHandler);
