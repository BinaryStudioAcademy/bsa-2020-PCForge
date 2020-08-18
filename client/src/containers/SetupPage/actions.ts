import { SetupActionTypes, GET_SETUP, GET_SETUP_SUCCESS, GET_SETUP_FAILURE, GET_SETUP_COMMENTS } from './actionTypes';
import { PCSetup } from 'common/models/setup';

export const getSetup = (payload: { id: number }): SetupActionTypes => ({
  type: GET_SETUP,
  payload,
});

export const getSetupComments = (payload: { id: number }): SetupActionTypes => ({
  type: GET_SETUP_COMMENTS,
  payload,
});

// export const getSetupRate = (pau)
