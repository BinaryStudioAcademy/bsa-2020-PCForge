import { HomeActionTyeps, GET_NEWS } from './actionTypes';

export const getNewsRequest = (): HomeActionTyeps => ({
    type: GET_NEWS,
})