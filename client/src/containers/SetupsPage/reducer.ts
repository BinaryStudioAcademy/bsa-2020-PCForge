import { SetupsActions, SetupState, SetupsActionsTypes } from './actionTypes';

const initialState: SetupState = {
  setups: [],
  setupsCount: 0,
  topSetups: [],
  filter: { sort: 'mostRated', viewCount: 9 },
  error: '',
  showSpinner: true,
};

export function SetupsReducer(state = initialState, action: SetupsActions): SetupState {
  switch (action.type) {
    case SetupsActionsTypes.FETCH_SETUPS_SUCCESS: {
      return {
        ...state,
        setups: action.payload.setups,
        setupsCount: action.payload.setupsCount,
      };
    }
    case SetupsActionsTypes.FETCH_TOP_SETUPS_SUCCESS: {
      return {
        ...state,
        topSetups: action.payload.setups,
      };
    }
    case SetupsActionsTypes.CHANGE_SORTING_TYPE: {
      const newFilter = { ...state.filter };
      console.log('functionSetupsReducer -> newFilter', newFilter);
      return {
        ...state,
        filter: {
          ...newFilter,
          sort: action.payload.sort,
        },
      };
    }
    case SetupsActionsTypes.SHOW_SPINNER: {
      return {
        ...state,
        showSpinner: action.payload.showSpinner,
      };
    }
    default:
      return state;
  }
}
