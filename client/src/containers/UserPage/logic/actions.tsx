import {
  UserActionTypes,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
  LOAD_USER_GAMES,
  LOAD_USER_GAMES_SUCCESS,
  LOAD_FILTERED_GAMES,
  LOAD_FILTERED_GAMES_SUCCESS,
  ADD_USER_GAME,
  DELETE_USER_GAME,
} from './actionTypes';

import { TypeUser } from 'common/models/typeUser';
import { UserGame, Game } from 'common/models/typeUserGame';
import { User } from 'common/models/user';

export const loadUser = (id: number): UserActionTypes => ({
  type: LOAD_USER,
  payload: { id },
});

export const loadUserSuccess = (data: TypeUser): UserActionTypes => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
});

export const updateUser = (data: TypeUser, avatarData?: Blob): UserActionTypes => ({
  type: UPDATE_USER,
  payload: {
    data,
    avatarData,
  },
});

export const updateUserSuccess = (data: TypeUser): UserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const loadUserGames = (id: number): UserActionTypes => ({
  type: LOAD_USER_GAMES,
  payload: { id },
});

export const loadUserGamesSuccess = (data: UserGame[]): UserActionTypes => ({
  type: LOAD_USER_GAMES_SUCCESS,
  payload: data,
});

export const loadFilteredGames = (searchString: string): UserActionTypes => ({
  type: LOAD_FILTERED_GAMES,
  payload: { searchString },
});

export const loadFilteredGamesSuceess = (data: Game[]): UserActionTypes => ({
  type: LOAD_FILTERED_GAMES_SUCCESS,
  payload: data,
});

export const addUserGame = (id: number, gameId: number): UserActionTypes => ({
  type: ADD_USER_GAME,
  payload: { id, gameId },
});

export const deleteUserGame = (id: number, gameId: number): UserActionTypes => ({
  type: DELETE_USER_GAME,
  payload: {id, gameId},
})

export const showSpinner = (): UserActionTypes => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = (): UserActionTypes => ({
  type: HIDE_SPINNER,
});
