'use strict';


/*

- How to close modal by clicking outside modal

*/

const showModalEventHandler = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector(".overlay");
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModalEventHandler = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const modalButtons = document.querySelectorAll('.show-modal');
modalButtons.forEach(button => button.addEventListener('click', showModalEventHandler));

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', closeModalEventHandler);

const modalOverlay = document.querySelector('.overlay');
modalOverlay.addEventListener('click', closeModalEventHandler);
