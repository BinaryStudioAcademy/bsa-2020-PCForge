import { getAllUsersRequsts, deleteUserRequest, IUserRequestFilter } from 'api/services/addUserRequestService';
import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { loadUsersRequests, loadError } from './actions';
import {
  IUsersRequestDeleteAction,
  IUsersRequestAction,
  UsersRequestActions,
  UsersRequestState,
  UsersRequestActionTypes,
} from './actionsTypes';

function* getAllUsersRequests(action: IUsersRequestAction) {
  try {
    console.log('in saga');
    const { data: usersRequests } = yield call(getAllUsersRequsts, action.payload.filter);
    yield put(loadUsersRequests(usersRequests));
  } catch (error) {
    yield put(loadError(error));
  }
}

function* watchGetAllUsersRequests() {
  yield takeEvery(UsersRequestActionTypes.GET_USERS_REQUESTS, getAllUsersRequests);
}

function* deleteUserRequestSaga(action: IUsersRequestDeleteAction) {
  try {
    console.log('in Deletion saga');
    yield call(deleteUserRequest, action.payload.id);
    const { data: usersRequests } = yield call(getAllUsersRequsts, {});
    yield put(loadUsersRequests(usersRequests));
  } catch (error) {
    yield put(loadError(error));
  }
}

function* watchDeleteUserRequest() {
  yield takeEvery(UsersRequestActionTypes.DELETE_USER_REQUESTS, deleteUserRequestSaga);
}

export default function* quickMatcherSagas() {
  yield all([watchGetAllUsersRequests(), watchDeleteUserRequest()]);
}
