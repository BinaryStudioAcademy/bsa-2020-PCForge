import { all } from 'redux-saga/effects';
import registrationSaga from '../containers/Auth/registrationSagas';
import userSagas from 'containers/UserPage/logic/sagas';
import builderSagas from 'containers/BuilderPage/sagas';
import authSagas from 'containers/Auth/sagas';
import matcherSagas from 'containers/GameMatcher/sagas';
import quickMatcherSagas from 'containers/QuickMatcher/sagas';
import homePageSagas from 'containers/Home/logic/sagas';
import setupSagas from 'containers/SetupPage/sagas';
import setupChartSagas from 'containers/Chart/sagas';

export default function* rootSaga() {
  yield all([
    authSagas(),
    registrationSaga(),
    userSagas(),
    builderSagas(),
    quickMatcherSagas(),
    homePageSagas(),
    matcherSagas(),
    setupSagas(),
    setupChartSagas(),
  ]);
}
