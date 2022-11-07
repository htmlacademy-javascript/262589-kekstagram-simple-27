// открытие и закрытие модалки

import {isEscapeKey} from './util.js';
import {resetEffect} from './filter.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = modalElement.querySelector('#upload-cancel');
const scaleControlElement = modalElement.querySelector('[name="scale"]');
const textCommentElement = modalElement.querySelector('[name="description"]');
const effectElement = modalElement.querySelector('#effect-none');
const formElement = document.querySelector('#upload-select-image');

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

  resetEffect();
}

// использовала  function declaration, чтобы можно бало использовать ее до объявления
function closeModal () {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);

  scaleControlElement.value = '100%';
  formElement.reset();
  effectElement.checked = true;
  textCommentElement.value = '';
}

modalOpenElement.addEventListener('change', () => {
  openModal();
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});
