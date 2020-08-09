import { put, select, takeLatest } from 'redux-saga/effects';
import { showMessage } from '../actions/modalAction';
import { GOOGLE_AUTH, LOGIN, REGISTER } from '../constants';



function* onError() {
    const { error } = yield select(state => state.auth);
    yield put((showMessage({ message: error.err })));
}


function* gAuthError() {
    const { error } = yield select(state => state.auth);
    yield put((showMessage({ message: error.message })));
}

export default function* watchError() {

    yield takeLatest(REGISTER.REGISTER_ERROR, onError);

    yield takeLatest(LOGIN.AUTH_ERROR, onError);

    yield takeLatest(GOOGLE_AUTH.AUTH_ERROR, gAuthError);

}
