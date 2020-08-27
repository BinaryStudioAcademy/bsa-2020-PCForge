import { all } from 'redux-saga/effects';
import registrationSaga from '../containers/Auth/registrationSagas';
import userSagas from 'containers/UserPage/logic/sagas';
import builderSagas from 'containers/BuilderPage/sagas';
import authSagas from 'containers/Auth/sagas';
import matcherSagas from 'containers/GameMatcher/sagas';
import quickMatcherSagas from 'containers/QuickMatcher/sagas';
import userRequestsSagas from 'containers/AdminToolsPage/sagas';
import setupSagas from 'containers/SetupPage/sagas';
import homePageSagas from 'containers/Home/logic/sagas';
import gameFormSagas from 'containers/AddItemPages/AddGameForm/saga';
import hardwareFormSagas from 'containers/AddItemPages/AddHardwareForm/saga';
import setupChartSagas from 'containers/Chart/sagas';
import setupsSagas from 'containers/SetupsPage/sagas';
import emailVerificationActions from 'containers/EmailVerificationPage/sagas';
import resetPasswordSagas from 'containers/ResetPassword/sagas';
import newsSagas from 'containers/NewsPage/sagas';

export default function* rootSaga() {
  yield all([
    authSagas(),
    builderSagas(),
    emailVerificationActions(),
    hardwareFormSagas(),
    homePageSagas(),
    gameFormSagas(),
    matcherSagas(),
    quickMatcherSagas(),
    registrationSaga(),
    resetPasswordSagas(),
    setupChartSagas(),
    setupSagas(),
    setupsSagas(),
    userSagas(),
    userRequestsSagas(),
    newsSagas(),
  ]);
}
