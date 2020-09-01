import { hardwaresActionTypes, HARDWARES_GET_HARDWARES } from './actionTypes';
import { hardwareTypes } from './HardwareSidebarView/actionTypes';

export const getHardwares = (payload: { count: number; page: number; type: hardwareTypes }): hardwaresActionTypes => ({
  type: HARDWARES_GET_HARDWARES,
  payload,
});
