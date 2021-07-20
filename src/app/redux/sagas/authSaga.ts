import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import { Action } from '../actions/types';
import {
    FETCH_ACCOUNT_DATA_START,
    FETCH_ACCOUNT_DATA_SUCCESS,
    FETCH_ACCOUNT_DATA_FAILURE,
    FETCH_DOMAINS_DATA,
    ADD_DOMAINS_DATA
} from '../actions';



export function* fetchAccountHandler ({
    payload: {
        account
    } = {}
}: Action) {
    const accountData = yield call(fetchAccount, account as string);
    if (accountData) {
        yield put({
            type: FETCH_ACCOUNT_DATA_SUCCESS,
            payload: {
                account,
                accountData
            }
        });
    } else {
        yield put({
            type: FETCH_ACCOUNT_DATA_FAILURE,
        });
    }
    
}


export default function* accountSaga() {
    yield takeLatest(FETCH_ACCOUNT_DATA_START, fetchAccountHandler);
    yield takeLatest(FETCH_DOMAINS_DATA, fetchDomainsDataHandler);
}
