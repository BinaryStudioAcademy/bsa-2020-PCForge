import { TypeUserStatistic, TypeHarwareStatistic } from 'common/models/typeStatistic';
import { StatisticRequestActionTypes, StatisticState, StatisticRequestActions } from './actionTypes';

export const getStatisticMostActiveUsers = (): StatisticRequestActions => ({
  type: StatisticRequestActionTypes.GET_USERS_ACTION,
});

export const getStatisticMostUsedHardware = (): StatisticRequestActions => ({
  type: StatisticRequestActionTypes.GET_HARDWARE_ACTION,
});

export const loadStatisticMostActiveUsers = (userStatisticList: TypeUserStatistic[]): StatisticRequestActions => ({
  type: StatisticRequestActionTypes.GET_USERS_SUCCESS,
  payload: {
    userStatisticList,
  },
});

export const loadStatisticMostUsedHardware = (
  hardwareStatisticList: TypeHarwareStatistic[]
): StatisticRequestActions => ({
  type: StatisticRequestActionTypes.GET_HARDWARE_SUCCESS,
  payload: {
    hardwareStatisticList,
  },
});
