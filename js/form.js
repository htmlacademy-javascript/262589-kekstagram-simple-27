// валидация формы

const MINLENGHTCOMMENT = 20;
const MAXLENGHTCOMMENT = 140;

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'imp-upload__text-error',
});

function validateСomment (value) {
  return value.length >= MINLENGHTCOMMENT && value.length <= MAXLENGHTCOMMENT;
}

pristine.addValidator(form.querySelector('.text__description'), validateСomment, `От ${MINLENGHTCOMMENT} до ${MAXLENGHTCOMMENT} символов`);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
