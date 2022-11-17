// точка входа. Модуль, который связывает другие модули

import {showAlertError} from './messages.js';
import {closeModal} from './photo-modal.js';
import {setUserFormSubmit} from './form.js';
import {getPictureList} from './pictures.js';
import {getData} from './api.js';

getData(getPictureList, showAlertError);

setUserFormSubmit(closeModal);
