import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { loginSuccess, registerError } from '../actions/authAction';
import { LOGIN, REGISTER } from '../constants';
import { register, saveToken, signOut } from '../services/auth';

function* authorize() {
  try {
    const { location, body } = yield select(state => state.auth);
    const user = {
      ...body,
      location: {
        type: "Point",
        coordinates: [
          location.longitude,
          location.latitude,
        ]
      }
    }
    const { data } = yield call(register, user);
    yield call(saveToken, data.token);
    yield put(loginSuccess(data))
  } catch (err) {
    yield put(registerError(err.response.data))
  }
}

export default function* watchRegister() {

  yield takeLatest(REGISTER.INIT_REGISTER, authorize);

  yield take(LOGIN.LOGOUT);
  yield call(signOut)
}
