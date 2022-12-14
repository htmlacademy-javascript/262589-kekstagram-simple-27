// открытие и закрытие модалки

import {isEscapeKey} from './util.js';
import {resetEffect} from './filter.js';
import {resetScale} from './scale.js';
import {closeMessage, isErrorVisible} from './messages.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('.img-upload__input');
const modalCloseElement = modalElement.querySelector('.img-upload__cancel');
const textCommentElement = modalElement.querySelector('.text__description');
const formElement = document.querySelector('.img-upload__form');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(isErrorVisible()) {
      closeMessage();
    }else{
      closeModal();
    }
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

  formElement.reset();
  textCommentElement.value = '';
  resetEffect();
  resetScale();
}

modalOpenElement.addEventListener('change', () => {
  openModal();
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});

export {openModal, closeModal};
