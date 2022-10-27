// вспомогательныe функции

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const verifyMaxLengthStr = (str, maxlength) => str.length <= maxlength;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger, isEscapeKey, verifyMaxLengthStr};
