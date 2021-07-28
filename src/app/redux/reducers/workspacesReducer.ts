// actions
import { WRITE_DATA } from "../actions/selectOffice";

// types
import { Action } from "../actions/types";

const initialState = {
  offices: null,
};

export default function workspacesReducer(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case WRITE_DATA:
      return { ...state, offices: payload };
    default:
      return state;
  }
}
