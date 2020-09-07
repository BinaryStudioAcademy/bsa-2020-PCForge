import { all } from 'redux-saga/effects';
import authSagas from 'containers/Auth/sagas';

export default function* rootSaga() {
  yield all([
    authSagas()
  ]);
}
