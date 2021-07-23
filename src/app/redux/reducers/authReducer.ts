// редусер получает state, action
// => обновить стэйт после авторизации. дефолт експорт

// actions
import {
  // LOGIN_REQUEST,
  // SINGUP_REQUEST,
  AUTH_SUCCESS,
  // AUTH_FAILURE,
  LOGOUT,
} from "../actions";

// types
import { Action } from "../actions/types";

// type for initial state and export

const initialState = {
  user: null, // auth.user: jjj@dd
};

export default function authReducer(state = initialState, { type, payload }: Action) {
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
