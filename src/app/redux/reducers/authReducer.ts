// actions
import {
  AUTH_SUCCESS,
  LOGOUT,
  LOGIN_REQUEST,
  SINGUP_REQUEST,
  GET_CURRENT_USER,
  AUTH_FAILURE,
} from "../actions";

// types
import { Action } from "../actions/types";

const initialState = {
  user: null,
  loading: false,
};

export default function authReducer(
  state = initialState,
  { type, payload }: Action
) {
  // console.log('RUN REDUCER');
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, user: payload, loading: false };
    case LOGOUT:
      return { ...state, user: null };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case SINGUP_REQUEST:
      return { ...state, loading: true };
    case GET_CURRENT_USER:
      return { ...state, loading: true };
    case AUTH_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
