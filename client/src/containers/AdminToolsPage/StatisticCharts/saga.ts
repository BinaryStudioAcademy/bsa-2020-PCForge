import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { loadStatisticMostUsedHardware, loadStatisticMostActiveUsers } from './action';
import { TypeUserStatistic, TypeHarwareStatistic } from 'common/models/typeStatistic';
import {
  StatisticRequestActionTypes,
  StatisticState,
  StatisticRequestActions,
  IUsersRequestAction,
  IHardwareRequestAction,
} from './actionTypes';

import { getStatisticMostUsedHardware, getStatisticMostActiveUsers } from 'api/services/statistic.service';
import * as notification from 'common/services/notificationService';

function* getMostUsedHardware(action: IHardwareRequestAction) {
  try {
    const harwareStatistic: TypeHarwareStatistic[] = yield call(getStatisticMostUsedHardware);
    yield put(loadStatisticMostUsedHardware(harwareStatistic));
  } catch (error) {
    notification.error(`Error in getting statistic information about hardware using: ${error.message}`);
  }
}

function* watchGetMostUsedHardware() {
  yield takeEvery(StatisticRequestActionTypes.GET_HARDWARE_ACTION, getMostUsedHardware);
}

function* getMostActiveUsers(action: IUsersRequestAction) {
  try {
    const usersStatistic: TypeUserStatistic[] = yield call(getStatisticMostActiveUsers);
    yield put(loadStatisticMostActiveUsers(usersStatistic));
  } catch (error) {
    notification.error(`Error in getting statistic information about most active users: ${error.message}`);
  }
}

function* watchGetMostActiveUsers() {
  yield takeEvery(StatisticRequestActionTypes.GET_USERS_ACTION, getMostActiveUsers);
}

export default function* statisticSagas() {
  yield all([watchGetMostUsedHardware(), watchGetMostActiveUsers()]);
}
