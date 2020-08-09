import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { gAuthError, gAuthSuccess } from '../actions/authAction';
import { GOOGLE_AUTH } from '../constants';
import { saveToken } from '../services/auth';
import { gLogin, signIn, signOut } from '../services/gAuth';

function* authorize() {
  try {
    const { idToken } = yield call(signIn);
    const { location } = yield (select(state => state.auth))
    const body = {
      token: idToken,
      location: {
        type: "Point",
        coordinates: [
          location.longitude,
          location.latitude,
        ]
      }
    }
    const { data } = yield call(gLogin, body);
    yield call(saveToken, data.token);
    yield put(gAuthSuccess(data))
  } catch (error) {
    yield put(gAuthError(error))
  }
}

export default function* watchAuth() {
  yield takeLatest(GOOGLE_AUTH.AUTH_INIT, authorize);

  yield take(GOOGLE_AUTH.LOGOUT);
  yield call(signOut)
}
