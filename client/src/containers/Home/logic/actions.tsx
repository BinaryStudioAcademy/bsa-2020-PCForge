import { SetupActionTypes, LOAD_TOP_SETUPS_SUCCESS, LOAD_TOP_SETUPS } from './actionTypes';

import { PCSetup } from 'common/models/setup';

export const loadTopSetups = (): SetupActionTypes => ({
    type:LOAD_TOP_SETUPS,
})

export const loadTopSetupsSuccess = (data: PCSetup[]): SetupActionTypes => ({
    type: LOAD_TOP_SETUPS_SUCCESS,
    payload: data,
})