import { people } from './get-many-user.js';

//отображение фотографий пользователей
const picture = document.querySelector('#picture');
const pictures = document.querySelector('.pictures');

const getManyPictures = function () {
  for (let i = 0; i < 25; i++) {
    const pictureLinkClone = picture.content.cloneNode(true);

    const pictureImage = pictureLinkClone.querySelector('.picture__img');
    const pictureInfo = pictureLinkClone.querySelector('.picture__info');
    const pictureComments = pictureInfo.querySelector('.picture__comments');
    const pictureLikes = pictureInfo.querySelector('.picture__likes');

    pictureImage.setAttribute('src', people[i].url);
    pictureLikes.textContent = people[i].likes;
    pictureComments.textContent = people[i].comment.length;
    pictures.appendChild(pictureLinkClone);
  }
};
getManyPictures();
