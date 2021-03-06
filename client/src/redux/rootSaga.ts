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
import likeCommentSaga from 'components/Comments/Comment/saga';
import addUserRequest from 'containers/AddUserRequest/sagas';
import hardwareSagas from 'containers/HardwaresPage/HardwareSidebarView/sagas';
import hardwaresSagas from 'containers/HardwaresPage/sagas';
import topGamesSagas from 'containers/TopGames/redux/sagas';
import notificationSagas from 'containers/Notifications/redux/sagas';
import gameSagas from 'containers/GamePage/sagas';
import oneNewsSagas from 'containers/OneNewsPage/sagas';
import searchEngineSagas from 'containers/TopBar/sagas';
import gamesPageSagas from 'containers/GamesPage/sagas';
import newsFormSagas from 'containers/AddItemPages/AddNewsForm/saga';
import statisticSagas from 'containers/AdminToolsPage/StatisticCharts/saga';

export default function* rootSaga() {
  yield all([
    authSagas(),
    builderSagas(),
    emailVerificationActions(),
    hardwareSagas(),
    hardwaresSagas(),
    hardwareFormSagas(),
    homePageSagas(),
    gameFormSagas(),
    matcherSagas(),
    quickMatcherSagas(),
    resetPasswordSagas(),
    setupChartSagas(),
    setupSagas(),
    setupsSagas(),
    newsSagas(),
    likeCommentSaga(),
    addUserRequest(),
    userSagas(),
    userRequestsSagas(),
    topGamesSagas(),
    notificationSagas(),
    gameSagas(),
    oneNewsSagas(),
    searchEngineSagas(),
    gamesPageSagas(),
    newsFormSagas(),
    statisticSagas(),
  ]);
}
