import { all } from 'redux-saga/effects';
import errorSaga from './errorSaga';
import gAuthSaga from './gAuthSaga';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import tokenSaga from './tokenSaga';


export default function* rootSaga() {
    yield all([
        // gAuthSaga(),
        // loginSaga(),
        // registerSaga(),
        // errorSaga(),
        // tokenSaga(),

    ]);
}
