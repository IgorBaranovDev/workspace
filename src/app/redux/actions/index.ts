import { Action } from './types';
import { Creds } from '../../services/types';

export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
export const SINGUP_REQUEST = "USERS_SINGUP_REQUEST";
export const AUTH_SUCCESS = "USERS_AUTH_SUCCESS";
export const AUTH_FAILURE = "USER_AUTH_FAILURE";
export const LOGOUT = "USER_LOGOUT";

export const logIn = ( creds: Creds ): Action => ({ type: LOGIN_REQUEST, payload: creds });
export const signUp = ( creds: Creds ): Action => ({ type: SINGUP_REQUEST, payload: creds });
export const logOut = (): Action => ({ type: LOGOUT });
