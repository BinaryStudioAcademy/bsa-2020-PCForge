import { all } from 'redux-saga/effects';
import registrationSaga from '../containers/Auth/registrationSagas';
import userSagas from 'containers/UserPage/logic/sagas';
import builderSagas from 'containers/BuilderPage/sagas';
import authSagas from 'containers/Auth/sagas';
import quickMatcherSagas from 'containers/QuickMatcher/sagas';
import userRequestsSagas from 'containers/AdminToolsPage/RequestContainer/sagas';

export default function* rootSaga() {
  yield all([authSagas(), registrationSaga(), userSagas(), builderSagas(), quickMatcherSagas(), userRequestsSagas()]);
}
