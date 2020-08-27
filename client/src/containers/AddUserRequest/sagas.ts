import { getAllUsersRequsts, postUserRequest } from 'api/services/addUserRequestService';
import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';

import { updateLoadingStatus, loadError, loadAllUsersRequests, sendDataToAdmin, updateSendingStatus } from './actions';
import { IGetActualUsersRequestAction, AddRequestActionTypes, IUserSendRequestActiont } from './actionType';

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

function* createUserRequest(action: IUserSendRequestActiont) {
  try {
    const usersRequest = yield call(postUserRequest, action.payload.userRequest);
    console.log(usersRequest);
    yield put(updateSendingStatus(true));
  } catch (error) {
    yield put(loadError(error.message));
  } finally {
    //yield put(updateLoadingStatus(true));
  }
}

function* watchPostUserRequest() {
  yield takeEvery(AddRequestActionTypes.POST_USER_REQUEST_ACTION, createUserRequest);
}

export default function* AddRequestSagas() {
  yield all([watchGetAllUsersRequests(), watchPostUserRequest()]);
}
