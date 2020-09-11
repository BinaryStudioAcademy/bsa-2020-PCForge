import { hardwaresActionTypes, HARDWARES_GET_HARDWARES } from './actionTypes';
import { HardwareSearchPayload } from './interfaces';

export const getHardwares = (payload: HardwareSearchPayload): hardwaresActionTypes => ({
  type: HARDWARES_GET_HARDWARES,
  payload,
});
