// редактирование масштаба изображения
const StepParameters = {
  STEP: 25,
  VALUE_MIN: 25,
  VALUE_MAX: 100,
};

const scaleSmallerElement = document.querySelector('.scale__control--smaller');
const scaleBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewElement = document.querySelector('.img-upload__preview img');

const resetScale = () => {
  scaleValueElement.value = '100%';
  previewElement.style.transform = 'scale(1)';
};

scaleSmallerElement.addEventListener('click', () => {
  const currentValue = parseFloat(scaleValueElement.value);
  if(currentValue > StepParameters.VALUE_MIN || currentValue > StepParameters.VALUE_MAX) {
    const newInputValue = currentValue - StepParameters.STEP;
    scaleValueElement.value = `${newInputValue}%`;
    previewElement.style.transform = (`scale(${newInputValue / StepParameters.VALUE_MAX})`);
  }
});

scaleBiggerElement.addEventListener('click', () => {
  const currentValue = parseFloat(scaleValueElement.value);
  if(currentValue < StepParameters.VALUE_MIN || currentValue < StepParameters.VALUE_MAX) {
    const newInputValue = currentValue + StepParameters.STEP;
    scaleValueElement.value = `${newInputValue}%`;
    previewElement.style.transform = (`scale(${newInputValue / StepParameters.VALUE_MAX})`);
  }
});

export {resetScale};
