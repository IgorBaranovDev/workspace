// actions
import { AUTH_SUCCESS, LOGOUT } from "../actions";

// types
import { Action } from "../actions/types";

const initialState = {
  user: null,
};

export default function authReducer(
  state = initialState,
  { type, payload }: Action
) {
  // console.log('RUN REDUCER');
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
