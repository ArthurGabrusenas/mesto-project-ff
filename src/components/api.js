const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-mag-4",
  headers: {
    authorization: "a07a52dc-b599-4d03-9712-8ec6628640b6",
    "Content-Type": "application/json",
  },
};

function checkResponce(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => checkResponce(res));
};

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkResponce(res));
};

const editUserInfo = (nameValue, jobValue) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameValue,
      about: jobValue,
    }),
  }).then((res) => checkResponce(res));
};

const postNewCard = (placeName, placeLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: placeName,
      link: placeLink,
    }),
  }).then((res) => checkResponce(res));
};

const editAvatar = (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  }).then((res) => checkResponce(res));
};

const removeCardFromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkResponce(res));
};

const likeCardOnServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => checkResponce(res));
};

const removeLikeFromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkResponce(res));
};

export {
  getUserInfo,
  getInitialCards,
  editUserInfo,
  postNewCard,
  editAvatar,
  removeCardFromServer,
  likeCardOnServer,
  removeLikeFromServer,
};