import { takeLatest, call, put } from "redux-saga/effects";

// types
import { Action } from "../actions/types";
import { Creds } from "../../services/types";

// actions
import {
  LOGIN_REQUEST,
  SINGUP_REQUEST,
  AUTH_FAILURE,
  LOGOUT,
  authSuccess,
  INIT,
} from "../actions";

// auth services
import * as authService from "../../services/auth";

type AuthService = typeof authService;

type AuthMethod = keyof AuthService;

const typeToMethodMap: { [key: string]: AuthMethod } = {
  [LOGIN_REQUEST]: "signIn",
  [SINGUP_REQUEST]: "signUp",
  [LOGOUT]: "logOut",  
  [INIT]: "init",
};

// worker sagas
export const authUser = async (creds: Creds, authType: AuthMethod) => {
  try {
    const userData = await authService[authType]?.(creds);
    return userData;
  } catch (err) {
    console.log("auth error:", err);
    return null;
  }
};

export function* authHandler({ type, payload }: Action): Generator<any> {
  const authType: AuthMethod = typeToMethodMap[type];
  if (authType === "logOut") {
    const result = yield call(authService[authType]);
    console.log(result);
  } else {
    const userData: any = yield call(authUser, payload as Creds, authType);
    if (userData) {
      yield put(authSuccess(userData.user.email));
    } else {
      yield put({
        type: AUTH_FAILURE,
      });
    }
  }
}

export function* initHandler({ type, payload }: Action): Generator<any> {

}

// watcher saga
export default function* authSaga() {
  yield takeLatest([LOGIN_REQUEST, SINGUP_REQUEST, LOGOUT], authHandler);
  yield takeLatest([INIT], initHandler);
}
