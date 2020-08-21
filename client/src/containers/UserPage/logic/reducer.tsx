import { TypeUser } from 'common/models/typeUser';
import { SetupType } from 'common/models/typeSetup';
import { UserActionTypes, LOAD_USER_SUCCESS, UPDATE_USER_SUCCESS, LOAD_SETUPS_SUCCESS, SHOW_SPINNER, HIDE_SPINNER } from './actionTypes';

export interface IUserState {
  loadedUser: TypeUser | null;
  showSpinner: boolean;
  setups: SetupType[];
}

const initialState: IUserState = {
  loadedUser: null,
  showSpinner: true,
  setups: [],
};

function UserReducer(state = initialState, action: UserActionTypes): IUserState {
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
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loadedUser: action.payload,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loadedUser: action.payload,
      };
    case LOAD_SETUPS_SUCCESS:
      return {
        ...state,
        setups: action.payload,
      }
    default:
      return state;
  }
}

export default UserReducer;
