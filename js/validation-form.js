const uploadImgModal = document.querySelector('.img-upload__overlay');
const textHashtag = uploadImgModal.querySelector('.text__hashtags');
const textDescription = uploadImgModal.querySelector('.text__description');

//Валидтация ХэшТегов
const validateHashTag = (hashtag) => {
  const regexp = /^#\w{1,19}$/;
  const searchMatches = hashtag.match(regexp);
  return searchMatches !== null;
};

const validateHashTags = (str) => {
  if (str.trim().length === 0) {
    textHashtag.setCustomValidity('');
    return true;
  }
  const hashTags = str
    .toLowerCase()
    .split('')
    .filter((words) => words.length !== 0);

  for (let i = 0; i < hashTags.length; i++) {
    const tag = hashTags[i];

    if (!tag.startsWith('#')) {
      textHashtag.setCustomValidity('ХэшТег должен начинаться с символа #');
      return false;
    }

    if (tag.length > 20) {
      textHashtag.setCustomValidity('Максимальная длина ХэшТега 20 символов, включая решётку');
      return false;
    }

    if (!validateHashTag(hashTags[i])) {
      textHashtag.setCustomValidity(
        'ХэшТег может состоять только из букв и чисел',
      );
      return false;
    }
  }

  if (hashTags.length !== new Set(hashTags).size) {
    textHashtag.setCustomValidity('ХэшТеги не могут быть использованы дважды');
    return false;
  }

  if (hashTags.length > 5) {
    textHashtag.setCustomValidity('Нельзя указать больше пяти ХэшТегов 5');
    return false;
  }

  textHashtag.setCustomValidity('');
  return true;
};

//Если поле ввода в фокусе отключает закрытие по esc
const onFieldForRecording = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

textHashtag.addEventListener('keydown', onFieldForRecording);
textDescription.addEventListener('keydown', onFieldForRecording);

textHashtag.addEventListener('input', () => {
  if (!validateHashTags(textHashtag.value)) {
    textHashtag.reportValidity();
  }
});
