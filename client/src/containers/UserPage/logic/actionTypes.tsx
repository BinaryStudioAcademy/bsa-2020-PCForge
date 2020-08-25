import { TypeUser } from 'common/models/typeUser';
import { UserGame } from 'common/models/typeUserGame';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';
export const LOAD_USER_GAMES = 'LOAD_USER_GAMES'
export const LOAD_USER_GAMES_SUCCESS = 'LOAD_USER_GAMES_SUCCESS'

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

export interface updateUser {
  type: typeof UPDATE_USER;
  payload: {
    data: TypeUser;
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
  payload: {id: number};
}

export interface loadUserGamesSuccss {
  type: typeof LOAD_USER_GAMES_SUCCESS;
  payload: UserGame[],
}

export type UserActionTypes = hideSpinner | showSpinner | loadUser | loadUserSuccess | updateUser | updateUserSuccess | loadUserGames | loadUserGamesSuccss;
