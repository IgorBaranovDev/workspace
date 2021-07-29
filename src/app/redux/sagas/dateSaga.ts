import { takeLatest, call, put } from "redux-saga/effects";

// types
import { Action } from "../actions/types";

// actions
import {
  FETCH_OFFICES_DATA,
  fetchOfficesDataComplelte,
  // fetchFloorsDataComplelte,
} from "../actions/selectOffice";

// service
import { getAddressesData } from "../../services/BD";

// worker sagas
export function* dateHandler({ type, payload }: Action): Generator<any> {
  try {
    const dataOffices: any = yield call(getAddressesData);
    if (dataOffices) {
      yield put(fetchOfficesDataComplelte(dataOffices));
    } else {
      console.log("fech data offices fail");
    }

    // const dataFloors: any = yield call(getFloorsData);
    // if (dataFloors) {
    //   fetchFloorsDataComplelte(dataFloors);
    // } else {
    //   console.log("fech data floors fail");
    // }

    return dataOffices;
  } catch (err) {
    console.log("Fetch date offices error:", err);
    return null;
  }
}

// watcher saga
export default function* dateSaga() {
  yield takeLatest([FETCH_OFFICES_DATA], dateHandler);
}
