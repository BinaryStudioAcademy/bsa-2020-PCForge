import { HomePageActionTypes, LOAD_TOP_SETUPS_SUCCESS, SHOW_SPINNER, HIDE_SPINNER } from './actionTypes';
import { SetupType } from 'common/models/typeSetup';

export interface ITopSetupsState {
  setups: SetupType[];
  showSpinner: boolean;
}

const initialState: ITopSetupsState = {
  setups: [],
  showSpinner: true,
};

function HomePageReducer(state = initialState, action: HomePageActionTypes): ITopSetupsState {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        showSpinner: true,
      };
    case HIDE_SPINNER:
      return {
        ...state,
        showSpinner: false,
      };
    case LOAD_TOP_SETUPS_SUCCESS:
      return {
        ...state,
        setups: action.payload,
      };
    default:
      return state;
  }
}

export default HomePageReducer;
