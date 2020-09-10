import { IGamePageState } from 'containers/GamePage/interfaces';
import {
  GameActionTypes,
  GET_GAME_COMMENTS_SUCCESS,
  GET_GAME_FAILURE,
  GET_GAME_RATE_SUCCESS,
  GET_GAME_SUCCESS,
  SET_GAME_RATE_SUCCESS,
} from 'containers/GamePage/actionTypes';

const initialState: IGamePageState = {
  game: null,
  comments: null,
  rate: 0,
  commentsPerPage: 20,
  commentsCountTotal: 0,
  hasErrorDuringGameFetch: false,
};

export function GameReducer(state: IGamePageState = initialState, action: GameActionTypes): IGamePageState {
  switch (action.type) {
    case GET_GAME_SUCCESS:
    case SET_GAME_RATE_SUCCESS:
      return {
        ...state,
        game: action.payload,
      };
    case GET_GAME_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.data,
        commentsCountTotal: action.payload.meta.countAfterFiltering,
      };
    case GET_GAME_FAILURE:
      return {
        ...state,
        hasErrorDuringGameFetch: true,
      };
    case GET_GAME_RATE_SUCCESS: {
      return {
        ...state,
        rate: action.payload.average,
      };
    }
    default:
      return state;
  }
}
