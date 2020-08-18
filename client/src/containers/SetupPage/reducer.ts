import { ISetupState } from 'containers/SetupPage/interfaces';
import { GET_SETUP_SUCCESS, GET_SETUP_FAILURE, SetupActionTypes, GET_SETUP_COMMENTS_SUCCESS } from './actionTypes';

const initialState: ISetupState = {
  setup: null,
  comments: null,
};

export function SetupReducer(state: ISetupState = initialState, action: SetupActionTypes): ISetupState {
  switch (action.type) {
    case GET_SETUP_SUCCESS:
      return {
        ...state,
        setup: action.payload,
      };
    case GET_SETUP_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.data,
      };
    default:
      return state;
  }
}
