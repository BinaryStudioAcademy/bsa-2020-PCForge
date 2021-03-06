import { ISetupState } from 'containers/SetupPage/interfaces';
import {
  GET_SETUP_SUCCESS,
  GET_SETUP_FAILURE,
  SetupActionTypes,
  GET_SETUP_COMMENTS_SUCCESS,
  GET_SETUP_RATE_SUCCESS,
  SET_SETUP_RATE_SUCCESS,
} from './actionTypes';

const initialState: ISetupState = {
  setup: null,
  comments: null,
  rate: 0,
  commentsPerPage: 20,
  commentsCountTotal: 0,
  hasErrorDuringSetupFetch: false,
};

export function SetupReducer(state: ISetupState = initialState, action: SetupActionTypes): ISetupState {
  switch (action.type) {
    case GET_SETUP_SUCCESS:
    case SET_SETUP_RATE_SUCCESS:
      return {
        ...state,
        setup: action.payload,
      };
    case GET_SETUP_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.data,
        commentsCountTotal: action.payload.meta.countAfterFiltering,
      };
    case GET_SETUP_FAILURE:
      return {
        ...state,
        hasErrorDuringSetupFetch: true,
      };
    case GET_SETUP_RATE_SUCCESS: {
      return {
        ...state,
        rate: action.payload.average,
      };
    }
    default:
      return state;
  }
}
