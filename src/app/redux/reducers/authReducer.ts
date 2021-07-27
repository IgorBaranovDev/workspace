// actions
import { AUTH_SUCCESS, LOGOUT, CHECK } from "../actions";

// types
import { Action } from "../actions/types";

const initialState = {
  user: null,
};

console.log(initialState);

export default function authReducer(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case CHECK:
      return { ...state, user: payload };
    case AUTH_SUCCESS:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
