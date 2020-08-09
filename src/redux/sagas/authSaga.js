import { call, put, take, takeLatest } from 'redux-saga/effects';
import { authSuccess } from '../actions/authAction';
import { AUTH } from '../constants';
import { signOut } from '../services/auth';

function* authorize() {
    yield put(authSuccess({}))
}

export default function* watchAuth() {
    yield takeLatest(AUTH.INIT_AUTH, authorize);

    yield take(AUTH.LOGOUT);
    yield call(signOut)
}
