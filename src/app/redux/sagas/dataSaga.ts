import { takeLatest, call, put } from "redux-saga/effects";

// actions
import {
  FETCH_OFFICES_DATA,
  FETCH_SELECTED_OFFICE,
  fetchOfficesDataComplelte,
  fetchSelectedOfficeComplete,
} from "../actions/selectOffice";

// service
import { getAddressesData, getSelectedOffice } from "../../services/BD";
import { Action } from "../actions/types";

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

// watcher saga
export default function* dataSaga() {
  yield takeLatest([FETCH_OFFICES_DATA], dataHandlerOffices);
  yield takeLatest([FETCH_SELECTED_OFFICE], dataHandlerSelectedOffice);
}
