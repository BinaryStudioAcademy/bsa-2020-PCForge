import { all } from 'redux-saga/effects';
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
import hardwareSagas from 'containers/HardwaresPage/HardwareSidebarView/sagas';

export default function* rootSaga() {
  yield all([
    authSagas(),
    builderSagas(),
    emailVerificationActions(),
    hardwareSagas(),
    hardwareFormSagas(),
    homePageSagas(),
    gameFormSagas(),
    newsSagas(),
    matcherSagas(),
    quickMatcherSagas(),
    resetPasswordSagas(),
    setupChartSagas(),
    setupSagas(),
    setupsSagas(),
    userSagas(),
    userRequestsSagas(),
  ]);
}
