import { Floors } from "../../services/BD/type/Floors";
import { OfficesData } from "../../services/BD/type/OfficesData";
import { Action } from "./types";

export const FETCH_OFFICES_DATA = 'FETCH_OFFICES_DATA';
export const FETCH_OFFICES_DATA_COMPLETE = 'FETCH_OFFICES_DATA_COMPLETE';
export const FETCH_FLOORS_DATA = 'FETCH_FLOORS_DATA';
export const FETCH_FLOORS_DATA_COMPLETE = 'FETCH_FLOORS_DATA_COMPLETE';

export const fetchOfficesData = (): Action => ({
    type: FETCH_OFFICES_DATA,
});

export const fetchOfficesDataComplelte = (officesData: OfficesData): Action => ({
    type: FETCH_OFFICES_DATA_COMPLETE,
    payload: officesData
});

export const fetchFloorsData = (id: string): Action => ({
    type: FETCH_FLOORS_DATA,
    payload: id
});

export const fetchFloorsDataComplelte = (floors: Floors): Action => ({
    type: FETCH_FLOORS_DATA_COMPLETE,
    payload: floors
})

