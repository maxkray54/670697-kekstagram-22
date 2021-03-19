import { showAlert } from './util.js';
import { closeModal } from './editor.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');

const loadUserPhoto = () => {
  fileChooser.addEventListener('change', () => {
    const imgFile = fileChooser.files[0];
    const imgFileName = imgFile.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return imgFileName.endsWith(it);
    });

    if (/\.(jpe?g|png|gif)$/i.test(fileChooser.files[0].name) === false) {
      showAlert('Это не картинка, попробуйте снова');
      closeModal();
    }

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(imgFile);
    }
  });
};
loadUserPhoto();

