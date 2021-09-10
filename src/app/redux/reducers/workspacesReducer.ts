// actions
import {
  FETCH_OFFICES_DATA_COMPLETE,
  FETCH_SELECTED_OFFICE_COMPLETE,
  SET_SELECTED_FLOOR,
  // SET_RESERVATION
} from "../actions/selectOffice";

// types
import { Action } from "../actions/types";
import { Offices, OfficesData } from "../../services/BD/type";

type OfficesState = {
  officesData: OfficesData;
  selectedOffice: Offices | null;
  selectedFloor: number | null;
};

const initialState: OfficesState = {
  officesData: {},
  selectedOffice: null,
  selectedFloor: 1,
};

export default function workspacesReducer(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case FETCH_OFFICES_DATA_COMPLETE:
      return { ...state, officesData: payload };
    case FETCH_SELECTED_OFFICE_COMPLETE:
      return { ...state, selectedOffice: payload as Offices };
    case SET_SELECTED_FLOOR:
      return { ...state, selectedFloor: payload as number };
    // case SET_RESERVATION:
    //   return {... state, selectedOffice: }
    default:
      return state;
  }
}
