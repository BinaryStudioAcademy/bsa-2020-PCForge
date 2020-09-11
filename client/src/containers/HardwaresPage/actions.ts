import { hardwaresActionTypes, HARDWARES_GET_HARDWARES, SET_SELECTED_HARDWARE } from './actionTypes';
import { HardwareSearchPayload } from './interfaces';
import { ReactText } from 'react';

export const getHardwares = (payload: HardwareSearchPayload): hardwaresActionTypes => ({
  type: HARDWARES_GET_HARDWARES,
  payload,
});

export const setHardware = (payload: Record<string, ReactText> | null): hardwaresActionTypes => ({
  type: SET_SELECTED_HARDWARE,
  payload,
});
