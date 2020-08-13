import { all } from 'redux-saga/effects';
import userSagas from 'containers/UserPage/logic/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([userSagas()]);
}
