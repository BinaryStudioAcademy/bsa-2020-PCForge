import { getAllUsersRequsts, postUserRequest } from 'api/services/addUserRequestService';
import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  updateLoadingStatus,
  loadError,
  loadAllUsersRequests,
  sendDataToAdmin,
} from './actions';
import {
  IGetActualUsersRequestAction,
  AddRequestActionTypes,
} from './actionType';

function* getAllUsersRequests(action: IGetActualUsersRequestAction) {
  try {
    yield put(updateLoadingStatus(false));
    const { data: usersRequests } = yield call(getAllUsersRequsts, action.payload.filter);
    yield put(loadAllUsersRequests(usersRequests));
  } catch (error) {
    yield put(loadError(error.message));
  } finally {
    yield put(updateLoadingStatus(true));
  }
}

function* watchGetAllUsersRequests() {
  yield takeEvery(AddRequestActionTypes.GET_USERS_REQUESTS, getAllUsersRequests);
}

export default function* AddRequestSagas() {
  yield all([
    watchGetAllUsersRequests()
  ]);
}