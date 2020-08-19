import { SetupActionTypes, LOAD_TOP_SETUPS_SUCCESS, LOAD_TOP_SETUPS } from './actionTypes';
import { PCSetup } from 'common/models/setup';

export interface ITopSetupsState {
  setups: PCSetup[];
}

const initialState: ITopSetupsState = {
  setups: [],
};

function HomePageReducer(state = initialState, action: SetupActionTypes): ITopSetupsState {
  switch (action.type) {
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