import { takeLatest, call, put } from "redux-saga/effects";

// types
import { Action } from "../actions/types";
import { Creds } from "../../services/types";

// actions
import {
  LOGIN_REQUEST,
  SINGUP_REQUEST,
  GET_CURRENT_USER,
  LOGOUT,
  authFailure,
  authSuccess,
} from "../actions";

// auth services
import * as authService from "../../services/auth";
import { checkCurrentUser } from "../../services/auth";

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

    if (typeof userData !== "string") {
      yield put(authSuccess(userData.user.email));
    } else {
      yield put(authFailure(userData));
    }
  }
}

export function* checkingUser(): Generator<any> {
  try {
    const userDataFromLocalStorage: any = yield call(checkCurrentUser);
    yield put(authSuccess(userDataFromLocalStorage.email));
  } catch {
    console.log("no user");
    yield put(authFailure(""));
  }
}

// watcher saga
export default function* authSaga() {
  yield takeLatest([GET_CURRENT_USER], checkingUser);
  yield takeLatest([LOGIN_REQUEST, SINGUP_REQUEST, LOGOUT], authHandler);
}
