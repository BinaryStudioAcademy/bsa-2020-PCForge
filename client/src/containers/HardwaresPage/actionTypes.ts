import { ReactText } from 'react';

export const HARDWARES_GET_HARDWARES = 'HARDWARES_GET_HARDWARES';
export const HARDWARES_GET_HARDWARES_SUCESS = 'HARDWARES_GET_HARDWARES_SUCESS';
export const HARDWARES_GET_HARDWARES_FAILURE = 'HARDWARES_GET_HARDWARES_FAILURE';

export interface IGetHardwares {
  type: typeof HARDWARES_GET_HARDWARES;
  payload: {
    type: string;
  };
}

export interface IGetHardwaresSuccess {
  type: typeof HARDWARES_GET_HARDWARES_SUCESS;
  payload: {
    hardwares: Record<string, ReactText> | Record<string, Record<string, ReactText>>[];
  };
}

export interface IGetHardwareFailure {
  type: typeof HARDWARES_GET_HARDWARES_FAILURE;
  payload: {
    message: string;
  };
}

export type hardwaresActionTypes = IGetHardwares | IGetHardwaresSuccess | IGetHardwareFailure;
