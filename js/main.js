// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger ();

// Функция для проверки максимальной длины строки.

function verifyMaxLegthStr(str, maxlength) {
  return str.length <= maxlength;
}

verifyMaxLegthStr ('Maksar', 10);

//Больше деталей

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

// const getPhotos = Array.from({length: OBJECT_PHOTO_COUNT}, getPhoto);

const getPhotos = Array(OBJECT_PHOTO_COUNT).fill(0).map(getPhoto);

getPhotos();
