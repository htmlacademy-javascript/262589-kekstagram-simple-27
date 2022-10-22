// модуль, который отрисовывает миниатюры

import {getPhotos} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = getPhotos();

const pictureContainerFragment = document.createDocumentFragment();

pictures.forEach(({url, comments, likes}) => {
  const pictureItem = pictureTemplate.cloneNode(true);
  pictureItem.querySelector('.picture__img').src = url;
  pictureItem.querySelector('.picture__likes').textContent = comments;
  pictureItem.querySelector('.picture__comments').textContent = likes;
  pictureContainerFragment.append(pictureItem);
});

pictureContainer.append(pictureContainerFragment);
