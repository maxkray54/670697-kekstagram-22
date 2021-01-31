//Основу брал из источника: https://learn.javascript.ru/task/random-int-min-max

// Функция вывода рандоного числа в заданном промежутке
const randomInteger = function (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (min < 0, max < 0, max <= min) {
    window.console.log('invalid value');
  } else {
    return Math.floor(rand);
  }
}
window.console.log(randomInteger(10, 1));

//Функция для проверки максимальной длины строки. получаем либо true либо false
const countingSymbols = function (text, maxValue) {
  return text.length <= maxValue;
}
window.console.log(countingSymbols('Привет JS', 9))
