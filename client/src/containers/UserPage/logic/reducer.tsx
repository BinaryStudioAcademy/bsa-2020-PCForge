import { TypeUser } from 'common/models/typeUser';
import { UserGame, Game } from 'common/models/typeUserGame';
import { SetupType } from 'common/models/typeSetup';
import {
  UserActionTypes,
  LOAD_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
  LOAD_USER_GAMES_SUCCESS,
  LOAD_FILTERED_GAMES_SUCCESS,
  LOAD_SETUPS_SUCCESS,
} from './actionTypes';

export interface IUserState {
  loadedUser: TypeUser | null;
  userGames: UserGame[];
  filteredGames: Game[];
  showSpinner: boolean;
  setups: SetupType[];
}

const initialState: IUserState = {
  loadedUser: null,
  showSpinner: true,
  userGames: [],
  filteredGames: [],
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
    case LOAD_USER_GAMES_SUCCESS:
      return {
        ...state,
        userGames: action.payload,
      };
    case LOAD_FILTERED_GAMES_SUCCESS:
      return {
        ...state,
        filteredGames: action.payload,
      };
    case LOAD_SETUPS_SUCCESS:
      return {
        ...state,
        setups: action.payload,
      };
    default:
      return state;
  }
}

export default UserReducer;
