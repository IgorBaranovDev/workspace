import { Action } from "./types";
import { OfficesDate } from '../../services/BD/type';

export const FETCH_DATA = 'FETCH_DATA';
export const WRITE_DATA = 'WRITE_DATA'; 

export const fechData = (): Action => ({
    type: FETCH_DATA
})

export const writeData = (data: OfficesDate): Action => ({
    type: WRITE_DATA,
    payload: data
})
