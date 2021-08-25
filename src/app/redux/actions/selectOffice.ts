// types

import { Offices , OfficesData } from "../../services/BD/type";
import { Action } from "./types";

export const FETCH_OFFICES_DATA = "FETCH_OFFICES_DATA";
export const FETCH_OFFICES_DATA_COMPLETE = "FETCH_OFFICES_DATA_COMPLETE";
export const FETCH_SELECTED_OFFICE = "FETCH_SELECTED_OFFICE";
export const FETCH_SELECTED_OFFICE_COMPLETE = "FETCH_SELECTED_OFFICE_COMPLETE";
export const SET_SELECTED_FLOOR = "SET_SELECTED_FLOOR";

export const fetchOfficesData = (): Action => ({
  type: FETCH_OFFICES_DATA,
});

export const fetchOfficesDataComplelte = (
  officesData: OfficesData
): Action => ({
  type: FETCH_OFFICES_DATA_COMPLETE,
  payload: officesData,
});

export const fetchSelectedOffice = (id: string): Action => ({
  type: FETCH_SELECTED_OFFICE,
  payload: id,
});

export const fetchSelectedOfficeComplete = (office: Offices): Action => ({
  type: FETCH_SELECTED_OFFICE_COMPLETE,
  payload: office,
});

export const setSelectedFloor = (floor: number): Action => ({
  type: SET_SELECTED_FLOOR,
  payload: floor,
});
