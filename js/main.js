// точка входа. Модуль, который связывает другие модули

// import './util.js';
import './pictures.js';
import './photo-modal.js';
import './form.js';
import './scale.js';
import './filter.js';
import './messages.js';

import {showAlertError} from './messages.js';
import {closeModal} from './photo-modal.js';
import {setUserFormSubmit} from './form.js';
import {getPictureList} from './pictures.js';
import {getData} from './api.js';

getData(getPictureList, showAlertError);

setUserFormSubmit(closeModal);
