import {
  HomePageActionTypes,
  LOAD_TOP_SETUPS_SUCCESS,
  LOAD_TOP_SETUPS,
  SHOW_SPINNER,
  HIDE_SPINNER,
} from './actionTypes';

import { SetupType } from 'common/models/typeSetup';

export const loadTopSetups = (): HomePageActionTypes => ({
  type: LOAD_TOP_SETUPS,
});

export const loadTopSetupsSuccess = (data: SetupType[]): HomePageActionTypes => ({
  type: LOAD_TOP_SETUPS_SUCCESS,
  payload: data,
});

export const showSpinner = (): HomePageActionTypes => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = (): HomePageActionTypes => ({
  type: HIDE_SPINNER,
});
