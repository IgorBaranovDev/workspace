// actions
import {
  AUTH_SUCCESS,
  LOGOUT,
  LOGIN_REQUEST,
  SINGUP_REQUEST,
  AUTH_FAILURE,
  LOADING,
  GET_CURRENT_USER,
} from "../actions";

// types
import { Action } from "../actions/types";

const initialState = {
  user: null,
  loading: false,
  errorAuth: null,
};

export default function authReducer(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, user: payload, loading: false, errorAuth: null };
    case LOGOUT:
      return { ...state, user: null };
    case LOGIN_REQUEST:
    case SINGUP_REQUEST:
    case GET_CURRENT_USER:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false, errorAuth: payload };
    case LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
}
