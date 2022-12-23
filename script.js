'use strict';


/*

- How to close modal by clicking outside modal

*/
const modalButtons = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const showModalEventHandler = () => {
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}

const closeModalEventHandler = () => {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

modalButtons.forEach(button => button.addEventListener('click', showModalEventHandler));
closeModal.addEventListener('click', closeModalEventHandler);
modalOverlay.addEventListener('click', closeModalEventHandler);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModalEventHandler()
  };
})
