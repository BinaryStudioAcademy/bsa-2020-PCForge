import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { hardwaresActionTypes } from './actionTypes';
import { ReactText } from 'react';

export interface IHardwaresProps {
  state: IHardwaresState;
  getHardwares(payload: { count: number; from: number; type: hardwareTypes }): hardwaresActionTypes;
}

export interface IHardwaresState {
  hardwares: Record<string, ReactText>[];
  errorMessage: string | null;
}
