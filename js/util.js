
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

//Функция для проверки максимальной длины строки. получаем либо true либо false
const countingSymbols = function (text, maxValue) {
  return text.length <= maxValue;
}
window.console.log(countingSymbols('Привет JS', 9));

//Случайное уникальное число
const uniqNumbers = [];
const getRandUniqNumbers = function () {
  let isUniq = false;
  while (isUniq == false) {
    const rand = randomInteger(1, 1000);
    if (!uniqNumbers.includes(rand)) {
      uniqNumbers.push(rand);
      isUniq = true;
    }
  }
  return uniqNumbers[uniqNumbers.length - 1];
};

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscape = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { randomInteger, getRandUniqNumbers, showAlert, isEscape };
