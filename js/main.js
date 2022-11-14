// точка входа. Модуль, который связывает другие модули

// import './util.js';
import './pictures.js';
import './photo-modal.js';
import './form.js';
import './scale.js';
import './filter.js';

import {showAlertErrorPictureList} from './messages.js';
import {closeModal} from './photo-modal.js';
import {setUserFormSubmit} from './form.js';
import {getPictureList} from './pictures.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      showAlertErrorPictureList('Не удалось загрузить фотографии других пользователей.');
    }
  })
  .then((pictureList) => {
    getPictureList(pictureList);
  })
  .catch(() => {
    showAlertErrorPictureList('Не удалось загрузить фотографии других пользователей.');
  });

setUserFormSubmit(closeModal);
