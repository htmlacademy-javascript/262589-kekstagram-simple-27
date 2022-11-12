// точка входа. Модуль, который связывает другие модули

import './util.js';
import './pictures.js';
import './photo-modal.js';
import './form.js';
import './scale.js';
import './filter.js';

import {closeModal} from './photo-modal.js';
import {setUserFormSubmit} from './form.js';
import {getPictureList} from './pictures.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((pictureList) => {
    getPictureList(pictureList);
  });

setUserFormSubmit(closeModal);
