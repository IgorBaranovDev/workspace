import { takeLatest, call, put } from "redux-saga/effects";

// types
import { Action } from "../actions/types";
import { Creads } from "../../services/types";

// actions
import {
  LOGIN_REQUEST,
  SINGUP_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGOUT,
} from "../actions";

// auth services
import { signIn, signUp, logOut } from "../../services/auth";

const authService: {
  signIn: typeof signIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
} = {
  signIn,
  signUp,
  logOut,
};

type AuthMethod = keyof typeof authService;

const typeToMethodMap: { [key: string]: AuthMethod } = {
  [LOGIN_REQUEST]: "signIn",
  [SINGUP_REQUEST]: "signUp",
  [LOGOUT]: "logOut",
};

// worker sagas
export const authUser = async (creds: Creads, authType: AuthMethod) => {
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
  const userData = yield call(authUser, payload as Creads, authType);
  if (userData) {
    yield put({
      type: AUTH_SUCCESS,
      // payload: {}
    });
  } else {
    yield put({
      type: AUTH_FAILURE,
    });
  }
};

// watcher saga
export default function* authSaga() {
  yield takeLatest([LOGIN_REQUEST, SINGUP_REQUEST, LOGOUT], authHandler);
};
