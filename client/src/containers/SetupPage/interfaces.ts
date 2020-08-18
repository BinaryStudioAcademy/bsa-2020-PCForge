import { SetupActionTypes } from './actionTypes';
import { RouteComponentProps } from 'react-router-dom';
import { PCSetup } from 'common/models/setup';
import { SetupComment } from 'common/models/comment';

export interface ISetupProps extends RouteComponentProps<{ id: string }> {
  state: ISetupState;
  getSetup: (payload: { id: number }) => SetupActionTypes;
  getSetupComments: (payload: { id: number }) => SetupActionTypes;
}

export interface ISetupState {
  setup: PCSetup | null;
  comments: SetupComment[] | null;
}
