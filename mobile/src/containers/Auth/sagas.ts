import { loginRequestAction, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST } from './actionTypes';
import { authService } from '../../api/services/authService';
import { call, put, takeLatest, all } from 'redux-saga/effects';

function* login(action: loginRequestAction) {
    // yield put(changeLoadingStatus(false));
    try {
        const user = yield call(authService.login, action.payload);
        yield put({ type: AUTH_LOGIN_SUCCESS, payload: { user } });
    } catch (e) {
        yield put({
            type: AUTH_LOGIN_FAILURE,
            payload: {
                message: e.message,
            },
        });
    } finally {
    //   yield put(changeLoadingStatus(false));
    }
  }
  
function* watchLogin() {
    yield takeLatest(AUTH_LOGIN_REQUEST, login);
}

export default function* authSagas(){
    yield all([
        watchLogin(),
    ])
}
  