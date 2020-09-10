import { SetupActionTypes } from './actionTypes';
import { RouteComponentProps } from 'react-router-dom';
import { PCSetup } from 'common/models/setup';
import { Comment } from 'common/models/comment';

export interface ISetupProps extends RouteComponentProps<{ id: string; commentId: string }> {
  state: ISetupState;
  getSetup: (payload: { id: number }) => SetupActionTypes;
  getSetupComments: (payload: { id: number; count: number; from: number }) => SetupActionTypes;
  getSetupRate: (payload: { id: number }) => SetupActionTypes;
  createSetupComment: (payload: { id: number; value: string }) => SetupActionTypes;
  deleteSetupComment: (payload: { id: number; idSetup: number }) => SetupActionTypes;
  setSetupRate: (payload: { id: number; value: number }) => SetupActionTypes;
  forkSetup: (setupId: number) => SetupActionTypes;
}

export interface ISetupState {
  setup: PCSetup | null;
  comments: Comment[] | null;
  commentsCountTotal: number;
  commentsPerPage: number;
  hasErrorDuringSetupFetch: boolean;
  rate: number;
  commentPage?: number;
}
