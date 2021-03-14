import { drawUsersPictures } from './pictures.js';
import { setData, setClickEvts } from './big-pictures.js';
import { showAlert } from './util.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    drawUsersPictures(posts);
    setData(posts);
    setClickEvts();
  })
  .catch(() => {
    showAlert('Не удалось получить посты с сервера. Попробуйте ещё раз');
  });
