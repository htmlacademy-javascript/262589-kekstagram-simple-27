const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Не удалось загрузить фотографии других пользователей.');
      }
    })
    .then((pictureList) => {
      onSuccess(pictureList);
    })
    .catch(() => {
      onFail('Не удалось загрузить фотографии других пользователей.');
    });
};

const sendData = (onSuccess, onSuccessMessage, onErrorMessage, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onSuccessMessage();
      } else {
        onErrorMessage();
      }
    })
    .catch(() => {
      onErrorMessage();
    });
};

export {getData, sendData};
