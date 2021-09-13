import { takeLatest, call, put } from "redux-saga/effects";

// actions
import {
  FETCH_OFFICES_DATA,
  FETCH_SELECTED_OFFICE,
  SET_RESERVATION,
  fetchOfficesDataComplelte,
  fetchSelectedOfficeComplete,
  setSelectedFloor,
} from "../actions/selectOffice";

// service
import {
  getAddressesData,
  getSelectedOffice,
  setReservation,
} from "../../services/BD";

// types
import { Action } from "../actions/types";
import { PlaceReservation } from "../../services/BD/type";

// worker sagas
export function* dataHandlerOffices(): Generator<any> {
  try {
    const dataOffices: any = yield call(getAddressesData);
    if (dataOffices) {
      yield put(fetchOfficesDataComplelte(dataOffices));
    } else {
      console.log("fech data offices fail");
    }
    return dataOffices;
  } catch (err) {
    console.log("Fetch date offices error:", err);
    return null;
  }
}

export function* dataHandlerSelectedOffice({
  payload,
}: Action): Generator<any> {
  try {
    const dataSelectedOffice: any = yield call(
      getSelectedOffice,
      payload as string
    );
    if (dataSelectedOffice) {
      yield put(fetchSelectedOfficeComplete(dataSelectedOffice));




      
    } else {
      console.log("fetch data office addres fail");
    }
  } catch (err) {
    console.log("Fetch office addres error:", err);
  }
}

export function* dataHandlerReservationPlace({
  payload,
}: Action): Generator<any> {
  try {
    const idSelectOffice = yield call(
      setReservation,
      payload as PlaceReservation
    );
    const { selectFloor } = payload as PlaceReservation;    
    // after set new resrvation plase we get id selected office for update all data of office and set selectedFloor
    if (idSelectOffice) {
      const dataSelectedOffice: any = yield call(
        getSelectedOffice,
        idSelectOffice as string
      );
      if (dataSelectedOffice) {        
        yield put(fetchSelectedOfficeComplete(dataSelectedOffice ));
        yield put(setSelectedFloor(+selectFloor + 1));
      } else {
        console.log("fetch data office addres fail");
      }
    }
  } catch (err) {
    console.log("Set reservation select place error:", err);
  }
}

// watcher saga
export default function* dataSaga() {
  yield takeLatest([FETCH_OFFICES_DATA], dataHandlerOffices);
  yield takeLatest([FETCH_SELECTED_OFFICE], dataHandlerSelectedOffice);
  yield takeLatest([SET_RESERVATION], dataHandlerReservationPlace);
}
