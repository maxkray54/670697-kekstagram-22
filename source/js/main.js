import './util.js';
import { getData } from './get-data.js';
import { drawUsersPictures } from './pictures.js';
import './big-pictures.js';
import './editor.js';
import './editor-effects.js';
import './validation-form.js';
import { setPictureFilter } from './filter-posts.js';
import './load-user-photo.js';

getData((pictures) => {
  drawUsersPictures(pictures);
  setPictureFilter(pictures);
});
