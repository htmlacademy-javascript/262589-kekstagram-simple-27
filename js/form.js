// валидация формы

const CommentLength = {
  MIN: 20,
  MAX: 140
};

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'imp-upload__text-error',
});

const validateСomment = (value) => value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;


pristine.addValidator(form.querySelector('.text__description'), validateСomment, `От ${CommentLength.MIN} до ${CommentLength.MAX} символов`);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
