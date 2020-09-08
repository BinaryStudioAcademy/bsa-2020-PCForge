import { AlertsActions, AlertsActionTypes, AlertsState } from './actionTypes';

const initialState: AlertsState = {
  alerts: [],
};

export function AlertsReducer(state = initialState, action: AlertsActions): AlertsState {
  switch (action.type) {
    case AlertsActionTypes.ADD_ALERT: {
      return {
        ...state,
        alerts: [...state.alerts, action.payload.alert],
      };
    }

    case AlertsActionTypes.CLOSE_ALERT: {
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload.alert.id),
      };
    }

    default:
      return state;
  }
}
