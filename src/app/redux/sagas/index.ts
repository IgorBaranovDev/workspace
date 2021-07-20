import { all, spawn, call } from "redux-saga/effects";
import { authSaga } from './authSaga';
// import yourSaga2 from './yourSaga2';

const sagas: any[] = [
    authSaga
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