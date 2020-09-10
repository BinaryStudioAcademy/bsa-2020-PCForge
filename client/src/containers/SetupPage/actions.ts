import {
  SetupActionTypes,
  GET_SETUP,
  GET_SETUP_COMMENTS,
  CREATE_SETUP_COMMENT,
  DELETE_SETUP_COMMENT,
  GET_SETUP_RATE,
  SET_SETUP_RATE,
  FORK_SETUP,
} from './actionTypes';

export const getSetup = (payload: { id: number }): SetupActionTypes => ({
  type: GET_SETUP,
  payload,
});

export const getSetupComments = (payload: { id: number; count: number; from: number }): SetupActionTypes => ({
  type: GET_SETUP_COMMENTS,
  payload,
});

export const createSetupComment = (payload: { id: number; value: string }): SetupActionTypes => ({
  type: CREATE_SETUP_COMMENT,
  payload,
});
export const deleteSetupComment = (payload: { id: number; idSetup: number }): SetupActionTypes => ({
  type: DELETE_SETUP_COMMENT,
  payload,
});

export const getSetupRate = (payload: { id: number }): SetupActionTypes => ({
  type: GET_SETUP_RATE,
  payload,
});

export const setSetupRate = (payload: { id: number; value: number }): SetupActionTypes => ({
  type: SET_SETUP_RATE,
  payload,
});

export const forkSetup = (setupId: number): SetupActionTypes => ({
  type: FORK_SETUP,
  payload: { setupId },
});
