//Основу брал из источника: https://learn.javascript.ru/task/random-int-min-max

// Функция проверки макс меньше либо равен мин
const isMaxLessThanMin = (min, max) => (max <= min);

// Функция проверки мин и макс меньше нуля
const isMinMaxLessThanZero = (min, max) => (min < 0) || (max < 0);

// Функция вывода рандоного числа в заданном промежутке
const randomInteger = function (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (isMinMaxLessThanZero(min, max) || isMaxLessThanMin(min, max)) {
    window.console.log('invalid value');
  } else {
    return Math.floor(rand);
  }
}
window.console.log(randomInteger(1, 10));

//Функция для проверки максимальной длины строки. получаем либо true либо false
const countingSymbols = function (text, maxValue) {
  return text.length <= maxValue;
}
window.console.log(countingSymbols('Привет JS', 9))
