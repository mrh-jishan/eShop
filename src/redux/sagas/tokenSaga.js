import { call, put } from 'redux-saga/effects';
import { gAuthSuccess, loginSuccess } from '../actions/authAction';
import { getData } from '../services/api';
import { me } from '../services/auth';


function* checkAuth() {
    const token = yield call(getData, 'token');
    if (token) {
        try {
            const { data } = yield call(me)
            if (data.authType == 'basic') {
                yield put(loginSuccess({
                    user: data,
                    token: token
                }))
            } else if (data.authType == 'google') {
                yield put(gAuthSuccess({
                    user: data,
                    token: token
                }))
            } else {
                console.log('Login Type not found');
            }
        } catch (error) {
            console.log('ERROR ', error);
        }
    }
}

export default function* watchToken() {
    yield call(checkAuth)
}
