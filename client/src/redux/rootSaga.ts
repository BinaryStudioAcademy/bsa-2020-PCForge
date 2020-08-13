import { all } from 'redux-saga/effects';
import builderSagas from 'containers/BuilderPage/sagas';

export default function* rootSaga() {
  yield all([builderSagas()]);
}
