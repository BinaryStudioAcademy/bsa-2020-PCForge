import { TypeUser, TypeUserUpdate } from 'common/models/typeUser';
import { UserGame, Game } from 'common/models/typeUserGame';
import { deleteUserGame } from 'api/services/userService';
import { SetupType } from 'common/models/typeSetup';
import { UserPageTabs } from 'containers/UserPage/interfaces';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';
export const LOAD_USER_GAMES = 'LOAD_USER_GAMES';
export const LOAD_USER_GAMES_SUCCESS = 'LOAD_USER_GAMES_SUCCESS';
export const LOAD_FILTERED_GAMES = 'LOAD_FILTERED_GAMES';
export const LOAD_FILTERED_GAMES_SUCCESS = 'LOAD_FILTERED_GAMES_SUCCESS';
export const ADD_USER_GAME = 'ADD_USER_GAME';
export const DELETE_USER_GAME = 'DELETE_USER_GAME';
export const DELETE_USER_SETUP = 'DELETE_USER_SETUP';
export const EDIT_USER_SETUP = 'EDIT_USER_SETUP';
export const LOAD_SETUPS = 'LOAD_SETUPS';
export const LOAD_SETUPS_SUCCESS = 'LOAD_SETUPS_SUCCES';
export const SET_TAB = 'SET_TAB';

export interface loadUser {
  type: typeof LOAD_USER;
  payload: {
    id: number;
  };
}
export interface loadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  payload: TypeUser;
}

export interface loasUserFailure {
  type: typeof LOAD_USER_FAILURE;
}

export interface loadSetups {
  type: typeof LOAD_SETUPS;
  payload: {
    authorId: number;
  };
}

export interface loadSetupsSuccess {
  type: typeof LOAD_SETUPS_SUCCESS;
  payload: SetupType[];
}

export interface updateUser {
  type: typeof UPDATE_USER;
  payload: {
    data: TypeUserUpdate;
    avatarData?: Blob;
  };
}

export interface updateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload: TypeUser;
}

export interface showSpinner {
  type: typeof SHOW_SPINNER;
}

export interface hideSpinner {
  type: typeof HIDE_SPINNER;
}

export interface loadUserGames {
  type: typeof LOAD_USER_GAMES;
  payload: { id: number };
}

export interface loadUserGamesSuccss {
  type: typeof LOAD_USER_GAMES_SUCCESS;
  payload: UserGame[];
}

export interface loadFilteredGames {
  type: typeof LOAD_FILTERED_GAMES;
  payload: { searchString: string };
}

export interface loadFilteredGamesSuceess {
  type: typeof LOAD_FILTERED_GAMES_SUCCESS;
  payload: Game[];
}

export interface addUserGame {
  type: typeof ADD_USER_GAME;
  payload: { id: number; gameId: number };
}

export interface deleteUserGame {
  type: typeof DELETE_USER_GAME;
  payload: { id: number; gameId: number };
}

export interface deleteUserSetup {
  type: typeof DELETE_USER_SETUP;
  payload: { userId: number; setupId: number };
}

export interface IEditUserSetup {
  type: typeof EDIT_USER_SETUP;
  payload: { setupId: number };
}

export interface setTab {
  type: typeof SET_TAB;
  payload: { tab: UserPageTabs };
}

export type UserActionTypes =
  | hideSpinner
  | showSpinner
  | loadUser
  | loadUserSuccess
  | loasUserFailure
  | updateUser
  | updateUserSuccess
  | loadUserGames
  | loadUserGamesSuccss
  | loadFilteredGames
  | loadFilteredGamesSuceess
  | addUserGame
  | deleteUserGame
  | deleteUserSetup
  | IEditUserSetup
  | loadSetups
  | setTab
  | loadSetupsSuccess;
