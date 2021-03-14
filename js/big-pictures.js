// import { pictures } from './pictures.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentLoader = bigPicture.querySelector('.social__comments-loader');
const body = document.querySelector('body');

const setData = (allUsers) => {
  const picturesLinks = document.querySelectorAll('.picture');
  for (let i = 0; i < picturesLinks.length; i++) {
    picturesLinks[i].addEventListener('click', (evt) => {
      const idPost = allUsers[evt.target.id]
      const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');
      const socialCaption = bigPicture.querySelector('.social__caption');
      const socialLikes = bigPicture.querySelector('.social__likes > .likes-count');
      const commentsCount = bigPicture.querySelector('.comments-count');

      bigPictureImg.setAttribute('src', idPost.url);
      socialCaption.textContent = idPost.description;
      socialLikes.textContent = idPost.likes;
      commentsCount.textContent = idPost.comments.length;

      getManyComments(idPost);
    });
  }
};

const getManyComments = function (idPost) {
  const socialComment = bigPicture.querySelector('.social__comment');
  const socialComments = bigPicture.querySelector('.social__comments');
  socialComments.innerHTML = '';
  for (let i = 0; i < idPost.comments.length; i++) {
    const socialCommentClone = socialComment.cloneNode(true);

    const socialPicture = socialCommentClone.querySelector('.social__picture');
    const socialText = socialCommentClone.querySelector('.social__text');

    socialPicture.setAttribute('src', idPost.comments[i].avatar);
    socialPicture.setAttribute('alt', idPost.comments[i].name);
    socialText.textContent = idPost.comments[i].message;
    socialComments.appendChild(socialCommentClone);
  }
};

//перебор нод.листа чтобы при клике открывалось
const setClickEvts = function () {
  const picturesLinks = document.querySelectorAll('.picture');
  for (let i = 0; i < picturesLinks.length; i++) {
    picturesLinks[i].addEventListener('click', function () {
      body.classList.add('modal-open');
      bigPicture.classList.remove('hidden');
      socialCommentCount.classList.add('hidden');
      socialCommentLoader.classList.add('hidden');
    });
  }
};

const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

bigPictureCancel.addEventListener('click', () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});
export { setData, setClickEvts };
