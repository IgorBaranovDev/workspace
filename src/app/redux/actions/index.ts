// создать экшены для начала авторизации, успешная, провал авторизации. type string payload: {} || ''
// функции авторизация старт, данные подьзователя

const LOGIN_REQUEST = { type: "USERS_LOGIN_REQUEST", payload: {} };
const LOGIN_SUCCESS = { type: "USERS_LOGIN_SUCCESS", payload: {} };
const LOGIN_FAILURE = { type: "USERS_LOGIN_FAILURE", payload: {} };
const LOGOUT = { type: "USERS_LOGOUT", payload: {} };

export  {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
};
