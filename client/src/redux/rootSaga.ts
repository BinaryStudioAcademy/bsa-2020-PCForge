import { all } from 'redux-saga/effects';
import userSagas from 'containers/UserPage/logic/sagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
  ]);
}
