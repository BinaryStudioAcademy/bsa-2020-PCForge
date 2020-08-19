import { PCSetup } from 'common/models/setup';

export const LOAD_TOP_SETUPS = 'LOAD_TOP_SETUPS';
export const LOAD_TOP_SETUPS_SUCCESS = 'LOAD_TOP_SETUPS_SUCCESS';

export interface loadTopSetups {
    type: typeof LOAD_TOP_SETUPS;
}

export interface loadTopSetupsSuccess {
    type: typeof LOAD_TOP_SETUPS_SUCCESS;
    payload: PCSetup[];
}

export type SetupActionTypes = loadTopSetups | loadTopSetupsSuccess;