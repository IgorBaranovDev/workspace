// actions
import {
  FETCH_OFFICES_DATA_COMPLETE,
  FETCH_FLOORS_DATA_COMPLETE,
} from "../actions/selectOffice";

// types
import { Action } from "../actions/types";
import { Floors } from "../../services/BD/type/Floors";
import { OfficesData } from "../../services/BD/type/OfficesData";

type OfficesState = {
  officesData: OfficesData;
  floors: Floors;
};

const initialState: OfficesState = {
  officesData: {},
  floors: {},
};

export default function workspacesReducer(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case FETCH_OFFICES_DATA_COMPLETE:
      return { ...state, officesData: payload };
    case FETCH_FLOORS_DATA_COMPLETE:
      return { ...state, floors: { ...state.floors, ...payload as object } };
    default:
      return state;
  }
}
