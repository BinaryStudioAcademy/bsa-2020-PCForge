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
import { getAllNews } from 'api/services/newsService';
import * as notification from 'common/services/notificationService';

import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  loadAllUsersRequests,
  updateUserRequestsLoadingComponentStatus,
  updateTotalsLoadingComponentStatus,
  loadAllTotalCounts,
} from './actions';
import {
  IUsersRequestDeleteAction,
  IUsersRequestAction,
  UsersRequestActionTypes,
  ITotalCountsAction,
} from './actionsTypes';
import { UserRequestedType } from 'common/enums/UserRequestedType';

function* getAllUsersRequests(action: IUsersRequestAction) {
  try {
    yield put(updateUserRequestsLoadingComponentStatus(false));
    const { data: usersRequests } = yield call(getAllUsersRequsts, {});
    const { meta: countGames } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.game });
    const { meta: countHardwares } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.hardware });
    yield put(loadAllUsersRequests(usersRequests, countGames.countAfterFiltering, countHardwares.countAfterFiltering));
  } catch (error) {
    notification.error(`Error in getting information about user requests: ${error.message}`);
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
    yield call(deleteUserRequest, action.payload.id, action.payload.type);
    const { data: usersRequests } = yield call(getAllUsersRequsts, {});
    const { meta: countGames } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.game });
    const { meta: countHardwares } = yield call(getAllUsersRequsts, { requestedType: UserRequestedType.hardware });
    yield put(loadAllUsersRequests(usersRequests, countGames.countAfterFiltering, countHardwares.countAfterFiltering));
  } catch (error) {
    notification.error(`Error in getting information about user requests: ${error.message}`);
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
    const { meta: setupsCount } = yield call(getAllSetups); //countNews
    const { meta: newsCount } = yield call(getAllNews);

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
      loadAllTotalCounts(
        usersCount.globalCount,
        setupsCount.globalCount,
        hardwareCount,
        gamesCount.globalCount,
        newsCount.globalCount
      )
    );
  } catch (error) {
    notification.error(`Error in getting total information: ${error.message}`);
  } finally {
    yield put(updateTotalsLoadingComponentStatus(true));
  }
}

export default function* AdminToolsSagas() {
  yield all([watchGetAllUsersRequests(), watchDeleteUserRequest(), watchGetAllTotalCount()]);
}
