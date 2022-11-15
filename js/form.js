// валидация формы

import {showSuccess, showError} from './messages.js';
import {sendData} from './api.js';

const formElement = document.querySelector('#upload-select-image');
const submitButtonElement = document.querySelector('#upload-submit');

const CommentLength = {
  MIN: 20,
  MAX: 140,
};

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'imp-upload__text-error',
});

const validateСomment = (value) => value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;

pristine.addValidator(formElement.querySelector('.text__description'), validateСomment, `От ${CommentLength.MIN} до ${CommentLength.MAX} символов`);

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};


const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccess();
          unblockSubmitButton();
        },
        () => {
          showError();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};


export {setUserFormSubmit};
