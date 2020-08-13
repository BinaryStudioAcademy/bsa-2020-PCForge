import { all } from 'redux-saga/effects';
import userSagas from 'containers/UserPage/logic/sagas';
import builderSagas from 'containers/BuilderPage/sagas';

export default function* rootSaga() {
  yield all([userSagas(), builderSagas()]);
}
