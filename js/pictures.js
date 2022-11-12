// модуль, который отрисовывает миниатюры

const pictureContainerElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const getPictureList = (pictureList) => {

  const pictureContainerFragment = document.createDocumentFragment();

  pictureList.forEach(({url, comments, likes}) => {
    const pictureItemElement = pictureTemplateElement.cloneNode(true);
    pictureItemElement.querySelector('.picture__img').src = url;
    pictureItemElement.querySelector('.picture__comments').textContent = comments;
    pictureItemElement.querySelector('.picture__likes').textContent = likes;
    pictureContainerFragment.append(pictureItemElement);
  });

  pictureContainerElement.append(pictureContainerFragment);
};

export {getPictureList};
