import { HardwareActionTypes, hardwareTypes } from './actionTypes';
import { RouteComponentProps } from 'react-router-dom';
import { Comment } from 'common/models/comment';
import { AlertType } from 'components/BasicComponents/Alert';
import { ReactText } from 'react';

export interface IHardwareProps extends RouteComponentProps<{ id: string; type: hardwareTypes }> {
  state: IHardwareState;
  getHardware: (payload: { id: number; type: hardwareTypes }) => HardwareActionTypes;
  getHardwareComments: (payload: {
    id: number;
    count: number;
    from: number;
    type: hardwareTypes;
  }) => HardwareActionTypes;
  getHardwareRate: (payload: { id: number; type: hardwareTypes }) => HardwareActionTypes;
  createHardwareComment: (payload: { id: number; value: string; type: hardwareTypes }) => HardwareActionTypes;
  setHardwareRate: (payload: { id: number; value: number; type: hardwareTypes }) => HardwareActionTypes;
  wipeSnackbarData: () => HardwareActionTypes;
}

export interface IHardwareState {
  hardware: Record<string, ReactText> | null;
  comments: Comment[] | null;
  commentsCountTotal: number;
  commentsPerPage: number;
  hasErrorDuringHardwareFetch: boolean;
  snackbarMessage?: string;
  snackbarMessageType?: AlertType;
  rate: number;
}
