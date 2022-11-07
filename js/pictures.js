// модуль, который отрисовывает миниатюры

import {getPhotos} from './data.js';

const pictureContainerElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const pictures = getPhotos();

const pictureContainerFragment = document.createDocumentFragment();

pictures.forEach(({url, comments, likes}) => {
  const pictureItemElement = pictureTemplateElement.cloneNode(true);
  pictureItemElement.querySelector('.picture__img').src = url;
  pictureItemElement.querySelector('.picture__likes').textContent = comments;
  pictureItemElement.querySelector('.picture__comments').textContent = likes;
  pictureContainerFragment.append(pictureItemElement);
});

const getPictureList = () => pictureContainerElement.append(pictureContainerFragment);

export {getPictureList};
