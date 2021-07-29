import { put, takeLatest, call } from "redux-saga/effects";

// types
import { Action } from "../actions/types";

// actions
import {
  FETCH_OFFICES_DATA,
  FETCH_OFFICES_DATA_COMPLETE,
} from "../actions/selectOffice";

// service
import { getAddressesData } from "../../services/BD";

// worker sagas
export function* dateHandler({ type, payload }: Action): Generator<any> {
  try {
    const dataOffices = yield call(getAddressesData);
    if (dataOffices) {
      yield put({
        type: FETCH_OFFICES_DATA_COMPLETE,
        payload: dataOffices,
      });
    } else {
      console.log("fech data fail");
    }
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
