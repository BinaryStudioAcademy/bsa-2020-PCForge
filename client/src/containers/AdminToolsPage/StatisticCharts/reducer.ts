import { TypeUserStatistic, TypeHarwareStatistic } from 'common/models/typeStatistic';
import { StatisticRequestActionTypes, StatisticState, StatisticRequestActions } from './actionTypes';

const initialState: StatisticState = {
  error: '',
  userStatisticList: [],
  hardwareStatisticList: [],
};

export default function StatisticRequestReducer(state = initialState, action: StatisticRequestActions): StatisticState {
  switch (action.type) {
    case StatisticRequestActionTypes.GET_HARDWARE_SUCCESS: {
      return {
        ...state,
        hardwareStatisticList: action.payload.hardwareStatisticList,
      };
    }
    case StatisticRequestActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        userStatisticList: action.payload.userStatisticList,
      };
    }
    default:
      return state;
  }
}
