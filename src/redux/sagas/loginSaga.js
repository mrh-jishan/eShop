import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { authError, loginSuccess } from '../actions/authAction';
import { LOGIN } from '../constants';
import { login, saveToken, signOut } from '../services/auth';

function* authorize() {
    try {
        const body = yield select(state => state.auth.body);
        const { data } = yield call(login, body);
        yield call(saveToken, data.token);
        yield put(loginSuccess(data))
    } catch (err) {
        yield put(authError(err.response.data))
    }
}

export default function* watchAuth() {
    yield takeLatest(LOGIN.INIT_AUTH, authorize);

    yield take(LOGIN.LOGOUT);
    yield call(signOut)
}
