import { ReactText } from 'react';
import { hardwareTypes } from './HardwareSidebarView/actionTypes';

export const HARDWARES_GET_HARDWARES = 'HARDWARES_GET_HARDWARES';
export const HARDWARES_GET_HARDWARES_SUCESS = 'HARDWARES_GET_HARDWARES_SUCESS';
export const HARDWARES_GET_HARDWARES_FAILURE = 'HARDWARES_GET_HARDWARES_FAILURE';

export interface IGetHardwares {
  type: typeof HARDWARES_GET_HARDWARES;
  payload: {
    type: hardwareTypes;
    from: number;
    count: number;
  };
}

export interface IGetHardwaresSuccess {
  type: typeof HARDWARES_GET_HARDWARES_SUCESS;
  payload: {
    hardwares: Record<string, ReactText>[];
    totalItemsCount: number;
  };
}

export interface IGetHardwareFailure {
  type: typeof HARDWARES_GET_HARDWARES_FAILURE;
  payload: {
    message: string;
  };
}

export type hardwaresActionTypes = IGetHardwares | IGetHardwaresSuccess | IGetHardwareFailure;
