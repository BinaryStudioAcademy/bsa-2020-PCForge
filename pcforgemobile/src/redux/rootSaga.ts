import { all } from 'redux-saga/effects';
import authSagas from 'containers/Auth/sagas';
import HomeSagas from 'containers/Home/sagas';

export default function* rootSaga() {
  yield all([
    authSagas(),
    HomeSagas()
  ]);
}
