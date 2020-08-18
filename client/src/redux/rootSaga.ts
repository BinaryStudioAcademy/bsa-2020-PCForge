import { all } from 'redux-saga/effects';
import userSagas from 'containers/UserPage/logic/sagas';
import builderSagas from 'containers/BuilderPage/sagas';
import authSagas from 'containers/Auth/sagas';
import quickMatcherSagas from 'containers/QuickMatcher/sagas';
import setupSagas from 'containers/SetupPage/sagas';

export default function* rootSaga() {
  yield all([authSagas(), userSagas(), builderSagas(), quickMatcherSagas(), setupSagas()]);
}
