import { SetupActionTypes } from './actionTypes';
import { RouteComponentProps } from 'react-router-dom';
import { PCSetup } from 'common/models/setup';
import { Comment } from 'common/models/comment';
import { AlertType } from 'components/BasicComponents/Alert';

export interface ISetupProps extends RouteComponentProps<{ id: string }> {
  state: ISetupState;
  getSetup: (payload: { id: number }) => SetupActionTypes;
  getSetupComments: (payload: { id: number; count: number; from: number }) => SetupActionTypes;
  getSetupRate: (payload: { id: number }) => SetupActionTypes;
  createSetupComment: (payload: { id: number; value: string }) => SetupActionTypes;
  setSetupRate: (payload: { id: number; value: number }) => SetupActionTypes;
  wipeSnackbarData: () => SetupActionTypes;
  forkSetup: (setupId:number) => SetupActionTypes;
}

export interface ISetupState {
  setup: PCSetup | null;
  comments: Comment[] | null;
  commentsCountTotal: number;
  commentsPerPage: number;
  hasErrorDuringSetupFetch: boolean;
  snackbarMessage?: string;
  snackbarMessageType?: AlertType;
  rate: number;
}
