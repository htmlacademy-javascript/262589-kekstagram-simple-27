//  эффекты для изображения

const EFFECTS = {
  none: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    filter: 'none',
    postfix: '',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'grayscale',
    postfix: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'sepia',
    postfix: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    filter: 'invert',
    postfix: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'blur',
    postfix: 'px',
  },
  heat: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'brightness',
    postfix: '',
  },
};

const previewElement = document.querySelector('.img-upload__preview img');
const sliderContenerElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const effectsListElement = document.querySelector('.effects__list');

const resetEffect = () => {
  sliderContenerElement.classList.add('hidden');
  previewElement.style.filter = '';
  previewElement.classList = '';
};

const slider = noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

slider.on('update', () => {
  const currentValue = slider.get();
  sliderValueElement.value = currentValue;

  const currentEffectName = effectsListElement.querySelector('input:checked').value;
  if (currentEffectName === 'none') {
    previewElement.style.filter = '';
  } else {
    const effect = EFFECTS[currentEffectName];
    previewElement.style.filter = `${effect.filter}(${currentValue}${effect.postfix})`;
  }
});

effectsListElement.addEventListener('change', (evt) => {
  const effectName = evt.target.value;
  previewElement.classList = '';
  const effect = EFFECTS[effectName];
  slider.updateOptions({
    range: effect.range,
    step: effect.step,
  });
  slider.set(effect.range.max);

  if ( effectName !== 'none' ) {
    previewElement.classList.add(`effects__preview--${effectName}`);
    sliderContenerElement.classList.remove('hidden');
  } else {
    previewElement.classList.remove(`effects__preview--${effectName}`);
    sliderContenerElement.classList.add('hidden');
  }
});

export {resetEffect};
