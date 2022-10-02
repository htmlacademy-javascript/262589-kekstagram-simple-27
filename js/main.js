// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandom(min, max) {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }
  else {
    if (max > min) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
    }
     {
      min = Math.floor(min);
      max = Math.ceil(max);
      return Math.floor(Math.random() * (min - max +1)) + max;
    }
  }
}

getRandom(0, 10);

console.log(getRandom(0, 10));
console.log(getRandom(10, 10));
console.log(getRandom('5', 10));
console.log(getRandom(20, 10));
console.log(getRandom('number', 10));


// Функция для проверки максимальной длины строки.

function verifyMaxLegthStr(str, maxlength) {
  if (str.length > maxlength) {
    return false;
  } else {
    return true;
  }
}

verifyMaxLegthStr('Maksar', 10);

console.log(verifyMaxLegthStr('Maksar', 10));
console.log(verifyMaxLegthStr('Maksar', 2));
