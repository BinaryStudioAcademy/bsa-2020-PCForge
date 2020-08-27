import { authService } from "api/services/auth.service";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAILURE, IVerifyEmailActions, IVerifyEmail, VERIFY_EMAIL } from "./actionTypes";

function* verifyEmail(action: IVerifyEmail){
  try {
    const response = yield call(authService.verifyEmail, action.payload);
    yield put({ type: VERIFY_EMAIL_SUCCESS });
  } catch(e) {
    yield put({ type: VERIFY_EMAIL_FAILURE })
  }
}

function* watchVerifyEmail(){
  yield takeEvery(VERIFY_EMAIL, verifyEmail)
}

export default function* emailVerificationActions(){
  yield all([
    watchVerifyEmail(),
  ])
}