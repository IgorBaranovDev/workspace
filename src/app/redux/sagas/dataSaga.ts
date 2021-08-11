import { takeLatest, call, put } from "redux-saga/effects";

// actions
import {
  FETCH_OFFICES_DATA,
  FETCH_FLOORS_DATA,
  fetchOfficesDataComplelte,
  fetchFloorsDataComplelte,
} from "../actions/selectOffice";

// service
import { getAddressesData, getFloorsData } from "../../services/BD";
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

export function* dataHandlerFloors({ payload }: Action): Generator<any> {
  try {
    const dataFloors: any = yield call(getFloorsData, payload as string);
    if (dataFloors) {
      yield put(fetchFloorsDataComplelte(dataFloors));
    } else {
      console.log("fech data floors fail");
    }
    return dataFloors;
  } catch (err) {
    console.log("Fetch date floors error:", err);
    return null;
  }
}

// watcher saga
export default function* dataSaga() {
  yield takeLatest([FETCH_OFFICES_DATA], dataHandlerOffices);
  yield takeLatest([FETCH_FLOORS_DATA], dataHandlerFloors);
}
