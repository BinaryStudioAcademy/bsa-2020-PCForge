import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { hardwaresActionTypes } from './actionTypes';
import { ReactText } from 'react';

export interface HardwareSearchPayload {
  count: number;
  from: number;
  type: hardwareTypes;
  searchValue: string;
}

export interface IHardwaresProps {
  state: IHardwaresState;
  getHardwares(payload: HardwareSearchPayload): hardwaresActionTypes;
  setHardware(payload: Record<string, ReactText>): hardwaresActionTypes;
}

export interface IHardwaresState {
  hardwares: Record<string, ReactText>[];
  selectedHardware: Record<string, ReactText> | null;
  totalItems: number;
  errorMessage: string | null;
}

export type HardwaresResponse = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Record<string, ReactText>[];
} | null;
