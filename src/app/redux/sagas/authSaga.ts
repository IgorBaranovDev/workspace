import { takeLatest, call, put } from "redux-saga/effects";

// types
import { Action } from "../actions/types";
import { Creds } from "../../services/types";

// actions
import {
  LOGIN_REQUEST,
  SINGUP_REQUEST,
  AUTH_FAILURE,
  GET_CURRENT_USER,
  LOGOUT,
  authSuccess,
  loding,
  // getCurrentUser,
} from "../actions";

// auth services
import * as authService from "../../services/auth";
import { getCurrentUser } from "../../services/auth";

type AuthService = typeof authService;

type AuthMethod = keyof AuthService;

const typeToMethodMap: { [key: string]: AuthMethod } = {
  [LOGIN_REQUEST]: "signIn",
  [SINGUP_REQUEST]: "signUp",
  [LOGOUT]: "logOut",
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
    yield call(authService[authType]);
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

export function* checkingUser(): Generator<any> {
  yield call(loding, false);
  const userDataFromLocalStorage: any = yield call(getCurrentUser);
  if (userDataFromLocalStorage) {
    yield put(authSuccess(userDataFromLocalStorage.email));
  } else {
    console.log("no user");
  }
}

// watcher saga
export default function* authSaga() {
  yield takeLatest([GET_CURRENT_USER], checkingUser);
  yield takeLatest([LOGIN_REQUEST, SINGUP_REQUEST, LOGOUT], authHandler);
}
