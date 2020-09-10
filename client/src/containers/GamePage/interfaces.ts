import { Game } from 'common/models/game';
import { Comment } from 'common/models/comment';
import { GameActionTypes } from 'containers/GamePage/actionTypes';
import { RouteComponentProps } from 'react-router-dom';

export interface IGamePageState {
  rate: number;
  game: Game | null;
  comments: Comment[] | null;
  commentsPerPage: number;
  commentsCountTotal: number;
  hasErrorDuringGameFetch: boolean;
}

export interface IGamePageProps extends IGamePageState, RouteComponentProps<{ id: string; commentId: string }> {
  getGame: (payload: { id: number }) => GameActionTypes;
  getGameComments: (payload: { id: number; count: number; from: number }) => GameActionTypes;
  createGameComment: (payload: { id: number; value: string }) => GameActionTypes;
  getGameRate: (payload: { id: number }) => GameActionTypes;
  setGameRate: (payload: { id: number; value: number }) => GameActionTypes;
}
