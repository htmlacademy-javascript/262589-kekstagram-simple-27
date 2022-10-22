// модуль, который создаёт данные
import {getRandomPositiveInteger} from './util.js';

const OBJECT_PHOTO_COUNT = 25;

const PHOTO_DESCRIPTION = [
  'description-1',
  'description-2',
  'description-3',
  'description-4',
  'description-5',
  'description-6',
];

function getPhoto (_, index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: PHOTO_DESCRIPTION[getRandomPositiveInteger(0, PHOTO_DESCRIPTION.length - 1)],
    likes: getRandomPositiveInteger (15, 200),
    comments: getRandomPositiveInteger (0, 200),
  };
}

// const getPhotos = () => Array.from({length: OBJECT_PHOTO_COUNT}, getPhoto);

const getPhotos = () => Array(OBJECT_PHOTO_COUNT).fill(0).map(getPhoto);

export {getPhotos};
