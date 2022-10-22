// вспомогательныe функции
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

// getRandomPositiveInteger ();

// Функция для проверки максимальной длины строки.

function verifyMaxLengthStr(str, maxlength) {
  return str.length <= maxlength;
}

verifyMaxLengthStr ('Maksar', 10);

export {getRandomPositiveInteger};
