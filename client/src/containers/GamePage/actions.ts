import {
  GameActionTypes,
  CREATE_GAME_COMMENT,
  GET_GAME,
  GET_GAME_COMMENTS,
  GET_GAME_RATE,
  SET_GAME_RATE,
} from 'containers/GamePage/actionTypes';

export const getGame = (payload: { id: number }): GameActionTypes => ({
  type: GET_GAME,
  payload,
});

export const getGameComments = (payload: { id: number; count: number; from: number }): GameActionTypes => ({
  type: GET_GAME_COMMENTS,
  payload,
});

export const createGameComment = (payload: { id: number; value: string }): GameActionTypes => ({
  type: CREATE_GAME_COMMENT,
  payload,
});

export const getGameRate = (payload: { id: number }): GameActionTypes => ({
  type: GET_GAME_RATE,
  payload,
});

export const setGameRate = (payload: { id: number; value: number }): GameActionTypes => ({
  type: SET_GAME_RATE,
  payload,
});
