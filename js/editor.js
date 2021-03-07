const body = document.querySelector('body');
const uploadImgModal = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadImgModalClose = document.querySelector('#upload-cancel');

// Открывает окно после того как загрузиться файл и измениться значение формы
uploadFile.addEventListener('change', function () {
  resetSettings();
  uploadImgModal.classList.remove('hidden');
  body.classList.add('modal-open');
})

const closeModal = () => {
  uploadImgModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
};

uploadImgModalClose.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    closeModal();
  }
});

// Масштабирование изображения
const controlBigger = uploadImgModal.querySelector('.scale__control--bigger');
const controlSmaller = uploadImgModal.querySelector('.scale__control--smaller');
const controlValue = uploadImgModal.querySelector('.scale__control--value');
const uloadImagePreview = uploadImgModal.querySelector('.img-upload__preview > img');

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const resetSettings = () => {
  uloadImagePreview.style = 'transform: scale(1.00)';
  controlValue.value = '100%';
};

controlBigger.addEventListener('click', () => {
  let scale = parseInt(controlValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  controlValue.value = scale + '%';
  scale = scale / 100;
  uloadImagePreview.style.transform = 'scale(' + scale + ')';
});

controlSmaller.addEventListener('click', () => {
  let scale = parseInt(controlValue.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }

  controlValue.value = scale + '%';
  scale = scale / 100;
  uloadImagePreview.style.transform = 'scale(' + scale + ')';
});
