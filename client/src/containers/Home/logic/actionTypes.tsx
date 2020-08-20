import { SetupType } from 'common/models/typeSetup';

export const LOAD_TOP_SETUPS = 'LOAD_TOP_SETUPS';
export const LOAD_TOP_SETUPS_SUCCESS = 'LOAD_TOP_SETUPS_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

export interface loadTopSetups {
  type: typeof LOAD_TOP_SETUPS;
}

export interface loadTopSetupsSuccess {
  type: typeof LOAD_TOP_SETUPS_SUCCESS;
  payload: SetupType[];
}

export interface showSpinner {
  type: typeof SHOW_SPINNER;
}

export interface hideSpinner {
  type: typeof HIDE_SPINNER;
}

export type HomePageActionTypes = loadTopSetups | loadTopSetupsSuccess | showSpinner | hideSpinner;
