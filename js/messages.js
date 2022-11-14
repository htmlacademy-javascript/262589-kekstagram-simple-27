// сообщения

import {isEscapeKey} from './util.js';

const messageSuccessTemplateElement = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplateElement = document.querySelector('#error').content.querySelector('.error');

const ALERT_SHOW_TIME = 5000;

let errorVisible = false;

const messageSuccess = messageSuccessTemplateElement.cloneNode(true);
const messageError = messageErrorTemplateElement.cloneNode(true);

const isErrorVisible = () => errorVisible;

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const classesToCloseMessage = new Set([
  'success',
  'success__button',
  'error',
  'error__button',
]);

const onClick = (evt) => {
  if(classesToCloseMessage.has(evt.target.className)){
    closeMessage();
  }
};

const showSuccess = () => {
  document.body.append(messageSuccess);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onClick);
};

const showError = () => {
  document.body.append(messageError);
  document.body.classList.add('modal-open');
  document.addEventListener('click', onClick);
  errorVisible = true;
};

// использовала  function declaration, чтобы можно бало использовать ее до объявления
function closeMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onClick);
  errorVisible = false;
}

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlertError, showSuccess, showError, closeMessage, isErrorVisible};
