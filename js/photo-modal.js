// открытие и закрытие модалки

import {isEscapeKey} from './util.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = modalElement.querySelector('#upload-cancel');
const scaleControl = modalElement.querySelector('[name="scale"]');
const textComment = modalElement.querySelector('[name="description"]');
const effect = modalElement.querySelector('#effect-none');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

// использовала  function declaration, чтобы можно бало использовать ее до объявления
function openModal () {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

// использовала  function declaration, чтобы можно бало использовать ее до объявления
function closeModal () {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);

  scaleControl.value = '100%';
  effect.checked = true;
  textComment.value = '';
  modalOpenElement.reset();
}

modalOpenElement.addEventListener('change', () => {
  openModal();
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});
