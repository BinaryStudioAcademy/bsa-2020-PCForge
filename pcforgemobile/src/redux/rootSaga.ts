import {all} from 'redux-saga/effects';
import authSagas from 'containers/Auth/sagas';
import HomeSagas from 'containers/Home/sagas';
import MatcherSagas from 'containers/GameMatcher/sagas';

export default function* rootSaga() {
  yield all([authSagas(), HomeSagas(), MatcherSagas()]);
}
