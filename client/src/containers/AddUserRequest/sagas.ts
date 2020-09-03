import { getAllUsersRequsts, postUserRequest } from 'api/services/addUserRequestService';
import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  updateLoadingStatus,
  loadError,
  loadAllUsersRequests,
  updateSendingStatus,
  clearingStateValues,
} from './actions';
import {
  IGetActualUsersRequestAction,
  AddRequestActionTypes,
  IUserSendRequestActiont,
  IClearStateValuesAction,
} from './actionType';

function* getAllUsersRequests(action: IGetActualUsersRequestAction) {
  try {
    yield put(updateLoadingStatus(false));
    const { meta: count } = yield call(getAllUsersRequsts, action.payload.filter);
    yield put(loadAllUsersRequests(count.countAfterFiltering));
  } catch (error) {
    yield put(loadError(error.message));
  } finally {
    yield put(updateLoadingStatus(true));
  }
}

function* watchGetAllUsersRequests() {
  yield takeLatest(AddRequestActionTypes.GET_COUNT_USERS_REQUESTS, getAllUsersRequests);
}

function* createUserRequest(action: IUserSendRequestActiont) {
  try {
    const usersRequest = yield call(postUserRequest, action.payload.userRequest);
    yield put(updateSendingStatus(true));
  } catch (error) {
    yield put(loadError(error.message));
  }
}

function* watchPostUserRequest() {
  yield takeEvery(AddRequestActionTypes.POST_USER_REQUEST_ACTION, createUserRequest);
}

function* clearStateValues(action: IClearStateValuesAction) {
  try {
    yield put(clearingStateValues());
  } catch (error) {
    yield put(loadError(error.message));
  }
}

function* watchClearStateValues() {
  yield takeEvery(AddRequestActionTypes.CLEAR_STATE_VALUES_ACTION, clearStateValues);
}

export default function* AddRequestSagas() {
  yield all([watchGetAllUsersRequests(), watchPostUserRequest(), watchClearStateValues()]);
}
