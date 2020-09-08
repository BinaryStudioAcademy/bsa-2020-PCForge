import { all } from 'redux-saga/effects';
import authSagas from 'containers/Auth/sagas';
import matcherSagas from 'containers/GameMatcher/sagas';

export default function* rootSaga() {
  yield all([
    authSagas(),
    matcherSagas(),
  ]);
}
