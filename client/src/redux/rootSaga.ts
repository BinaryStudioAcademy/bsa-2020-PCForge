import { all } from 'redux-saga/effects';
import registrationSaga from '../containers/Auth/registrationSagas';

export default function* rootSaga() {
  yield all([
    // Define your sagas here
    registrationSaga(),
  ]);
}
