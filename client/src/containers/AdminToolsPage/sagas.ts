import { getAllUsersRequsts, deleteUserRequest } from 'api/services/addUserRequestService';
import { getAllUsers } from 'api/services/userService';
import { getAllSetups } from 'api/services/setupsService';
import { getAllGames } from 'api/services/gameService';
import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';
import { getAllMotherboard } from 'api/services/motherboardService';
import { getAllPowersupplies } from 'api/services/powersupplyService';
import { getAllRam } from 'api/services/ramService';
import { getAllSocket } from 'api/services/socketService';

import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  loadAllUsersRequests,
  loadTotalInfoError,
  loadUserRequestError,
  updateUserRequestsLoadingComponentStatus,
  updateTotalsLoadingComponentStatus,
  loadAllTotalCounts,
  clearingStateValues,
} from './actions';
import {
  IUsersRequestDeleteAction,
  IUsersRequestAction,
  UsersRequestActionTypes,
  ITotalCountsAction,
  IClearStateValuesAction,
} from './actionsTypes';
import { UserRequestedType } from 'common/enums/UserRequestedType';

function* getAllUsersRequests(action: IUsersRequestAction) {
  try {
    yield put(updateUserRequestsLoadingComponentStatus(false));
    const { data: usersRequests } = yield call(getAllUsersRequsts, {});
    const { meta: countGames } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.game });
    const { meta: countHardwares } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.hardware });
    console.log(countGames.countAfterFiltering);
    console.log(countHardwares.countAfterFiltering);
    yield put(loadAllUsersRequests(usersRequests, countGames.countAfterFiltering, countHardwares.countAfterFiltering));
  } catch (error) {
    yield put(loadUserRequestError(error.message));
  } finally {
    yield put(updateUserRequestsLoadingComponentStatus(true));
  }
}

function* watchGetAllUsersRequests() {
  yield takeEvery(UsersRequestActionTypes.GET_USERS_REQUESTS, getAllUsersRequests);
}

function* deleteUserRequestSaga(action: IUsersRequestDeleteAction) {
  try {
    yield put(updateUserRequestsLoadingComponentStatus(false));
    yield call(deleteUserRequest, action.payload.id);
    const { data: usersRequests } = yield call(getAllUsersRequsts, {});
    const { meta: countGames } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.game });
    const { meta: countHardwares } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.hardware });
    yield put(loadAllUsersRequests(usersRequests, countGames.countAfterFiltering, countHardwares.countAfterFiltering));
  } catch (error) {
    yield put(loadUserRequestError(error.message));
  } finally {
    yield put(updateUserRequestsLoadingComponentStatus(true));
  }
}

function* watchDeleteUserRequest() {
  yield takeEvery(UsersRequestActionTypes.DELETE_USER_ADDED_REQUESTS, deleteUserRequestSaga);
}

function* watchGetAllTotalCount() {
  yield takeEvery(UsersRequestActionTypes.GET_TOTAL_COUNTS, getAllTotalCount);
}

function* getAllTotalCount(action: ITotalCountsAction) {
  try {
    yield put(updateTotalsLoadingComponentStatus(false));
    const { meta: usersCount } = yield call(getAllUsers);
    const { meta: setupsCount } = yield call(getAllSetups);

    const { meta: MotherboardCount } = yield call(getAllMotherboard, {});
    const { meta: PowersuppliesCount } = yield call(getAllPowersupplies, {});
    const { meta: RAMCount } = yield call(getAllRam, {});
    const { meta: SocketCount } = yield call(getAllSocket, {});
    const { meta: GPUCount } = yield call(getAllGpu, {});
    const { meta: CPUCount } = yield call(getAllCpu, {});
    const hardwareCount =
      MotherboardCount.globalCount +
      PowersuppliesCount.globalCount +
      RAMCount.globalCount +
      SocketCount.globalCount +
      GPUCount.globalCount +
      CPUCount.globalCount;

    const { meta: gamesCount } = yield call(getAllGames, {});
    yield put(
      loadAllTotalCounts(usersCount.globalCount, setupsCount.globalCount, hardwareCount, gamesCount.globalCount)
    );
  } catch (error) {
    yield put(loadTotalInfoError(error.message));
  } finally {
    yield put(updateTotalsLoadingComponentStatus(true));
  }
}

function* clearStateValues(action: IClearStateValuesAction) {
  yield put(clearingStateValues());
}

function* watchClearStateValues() {
  yield takeEvery(UsersRequestActionTypes.CLEAR_ADMINPAGE_STATE_VALUES_ACTION, clearStateValues);
}

export default function* AdminToolsSagas() {
  yield all([watchGetAllUsersRequests(), watchDeleteUserRequest(), watchGetAllTotalCount(), watchClearStateValues()]);
}
