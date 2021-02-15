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
window.console.log(countingSymbols('Привет JS', 9));

//Функция для создания объекта c данными пользователя

const creatingUser = function (id, manyComments, randomManyDescriptions) {
  let user = {
    id: id,
    url: `photos/${id}.jpg`,
    description: randomManyDescriptions,
    likes: randomInteger(15, 200),
    comment: manyComments,
  }

  return user;
}

//Массив с описаниями к постам

let description = [
  'Круто отдохнули',
  'Невидомый закат',
  'Полнолуние',
  'Кто гулять?',
  'Паррррриж',
  'Ловлю ритм',
  'Подарите машину, которая не ломается',
  'Какое кино посмотреть',
  'На охоте',
  'Купил айфон',
];

const getRandomDescription = function () {
  const descriptionUser = randomInteger(0, 9);
  const randomDescription = description[descriptionUser];
  return randomDescription;
}
window.console.log(getRandomDescription());

//Массив с именами и функция которая выдает рандомное имя

let name = [
  'Миша',
  'Аня',
  'Даник',
  'Катя',
  'Юля',
  'Света',
  'Костя',
  'Соня',
  'Витя',
  'Женя',
  'Вася',
  'Агния',
  'Настя',
  'Юра',
  'Влад',
  'Саша',
  'Гена',
  'Ира',
  'Таня',
  'Игорь',
  'Илья',
  'Оля',
  'Вика',
  'Олег',
  'Вадим',
];

//Функция для рандомного имени из массива через индекс

const getRandomName = function () {
  const nameUser = randomInteger(0, 24);
  const randomName = name[nameUser];
  return randomName;
}
window.console.log(getRandomName());


const creatingComment = function (randomManyNames, id) {
  let comment = {
    id: id,
    avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
    message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    name: randomManyNames,
  }

  return comment;
}

window.console.log(creatingComment());

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
}

//Функция для создания массива c пользователя и массивов комментариев
const getManyUser = function () {
  const users = [];
  for (let i = 0; i < 25; i++) {
    const comments = [];
    const countComments = randomInteger(3, 15);
    const randomManyDescriptions = getRandomDescription();
    for (let g = 0; g < countComments; g++) {
      const commentsId = getRandUniqNumbers();
      const randomManyNames = getRandomName();
      comments.push(creatingComment(randomManyNames, commentsId));
    }
    users.push(creatingUser(i + 1, comments, randomManyDescriptions));
  }
  window.console.log(users);
}
getManyUser();
