// точка входа. Модуль, который связывает другие модули

import './util.js';
import './data.js';
import './pictures.js';

import {getPhotos} from './data.js';

getPhotos();
