import { all, spawn, call } from "redux-saga/effects";

// sagas
import  authSaga  from './authSaga';
import dataSaga from "./dataSaga";

const sagas: any[] = [
    authSaga,
    dataSaga
];

function* rootSaga() {
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (err) {
            console.log(err);
          }
        }
      })
    )
  );
}

export default rootSaga;
