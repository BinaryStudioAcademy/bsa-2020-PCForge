import { SearchState, SearchActions, SearchActionsTypes } from './actionTypes';

const initialState: SearchState = {
  results: [],
};

export function SearchReducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {
    case SearchActionsTypes.GET_SEARCH_RESULTS_SUCCESS: {
      return {
        ...state,
        results: action.payload,
      };
    }
    case SearchActionsTypes.CLEAR_SEARCH_RESULTS: {
      return {
        ...state,
        results: [],
      };
    }
    default:
      return state;
  }
}
