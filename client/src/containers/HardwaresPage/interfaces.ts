import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { hardwaresActionTypes } from './actionTypes';
import { ReactText } from 'react';

export interface IHardwaresProps {
  getHardwares(payload: { count: number; page: number; type: hardwareTypes }): hardwaresActionTypes;
}

export interface IHardwaresState {
  hardwares: Record<string, ReactText> | Record<string, Record<string, ReactText>>[];
  errorMessage: string | null;
}
