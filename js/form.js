// валидация формы

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'imp-upload__text-error',
});

function validateСomment (value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(form.querySelector('.text__description'), validateСomment, 'От 20 до 140 символов');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
