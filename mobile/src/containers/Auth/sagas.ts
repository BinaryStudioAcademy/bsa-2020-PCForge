import { loginRequestAction, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST } from "./actionTypes";
import { authService } from "../../api/services/authService";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { UserLoginAttributes } from "../../common/models/user";

function* login(action: loginRequestAction) {
    // yield put(changeLoadingStatus(false));
    try {
        const user = yield call<(data: UserLoginAttributes) => void>(authService.login, action.payload);
        console.log(user, 'user');
        yield put({ type: AUTH_LOGIN_SUCCESS, payload: { user } });
    } catch (e) {
        console.log(e, 'error')
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
  