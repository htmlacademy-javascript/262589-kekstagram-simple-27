// валидация формы

import {showSuccess, showError} from './messages.js';
import {sendData} from './api.js';

const CommentLength = {
  MIN: 20,
  MAX: 140,
};

const formElement = document.querySelector('#upload-select-image');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'imp-upload__text-error',
});

const validateСomment = (value) => value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;


pristine.addValidator(formElement.querySelector('.text__description'), validateСomment, `От ${CommentLength.MIN} до ${CommentLength.MAX} символов`);

const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        onSuccess,
        showSuccess,
        showError,
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
