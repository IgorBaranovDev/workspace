import { Action } from "./types";
import { Creds } from "../../services/types";

export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
export const SINGUP_REQUEST = "USERS_SINGUP_REQUEST";
export const AUTH_SUCCESS = "USERS_AUTH_SUCCESS";
export const AUTH_FAILURE = "USER_AUTH_FAILURE";
export const LOGOUT = "USER_LOGOUT";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const LOADING = "LOADING";

export const logIn = (creds: Creds): Action => ({
  type: LOGIN_REQUEST,
  payload: creds,
});

export const signUp = (creds: Creds): Action => ({
  type: SINGUP_REQUEST,
  payload: creds,
});

export const logOut = (): Action => ({ type: LOGOUT });

export const authSuccess = (user: string): Action => ({
  type: AUTH_SUCCESS,
  payload: user,
});

export const getCurrentUser = (): Action => ({ type: GET_CURRENT_USER });

export const setUserLoadingState = (state: boolean) => ({
  type: LOADING,
  payload: state,
});

export const authFailure = (message: string = 'Somthing wrong ...'): Action => ({
  type: AUTH_FAILURE,
  payload: message,
});
