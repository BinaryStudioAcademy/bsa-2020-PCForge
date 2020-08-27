import { SetupsActions, SetupState, SetupsActionsTypes } from './actionTypes';

const initialState: SetupState = {
  setups: [],
  topSetups: [],
  error: '',
};

export function SetupsReducer(state = initialState, action: SetupsActions): SetupState {
  switch (action.type) {
    case SetupsActionsTypes.FETCH_SETUPS_SUCCESS: {
      return {
        ...state,
        setups: action.payload.setups,
      };
    }
    case SetupsActionsTypes.FETCH_TOP_SETUPS_SUCCESS: {
      return {
        ...state,
        topSetups: action.payload.setups,
      };
    }
    default:
      return state;
  }
}
