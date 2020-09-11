import {
  IFetchGamesRequest,
  IFetchGamesSuccess,
  GamesActionsTypes,
  IFetchGamesFailure,
  IFetchTopGamesRequest,
  IFetchTopGamesSuccess,
  IFetchTopGamesFailure,
  IChangeSortingTypes,
  IShowSpinner,
} from './actionTypes';
import { Game } from 'common/models/game';
import { IGameFilter } from 'api/services/gameService';

export const fetchGames = (payload: IGameFilter = {}): IFetchGamesRequest => ({
  type: GamesActionsTypes.FETCH_GAMES_REQUEST,
  payload,
});

export const fetchTopGames = (): IFetchTopGamesRequest => ({
  type: GamesActionsTypes.FETCH_TOP_GAMES_REQUEST,
});

export const setGames = (games: Game[], gamesCount: number): IFetchGamesSuccess => ({
  type: GamesActionsTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
    gamesCount,
  },
});

export const setTopsGames = (games: Game[]): IFetchTopGamesSuccess => ({
  type: GamesActionsTypes.FETCH_TOP_GAMES_SUCCESS,
  payload: {
    games,
  },
});

export const changeSortType = (sort: string): IChangeSortingTypes => ({
  type: GamesActionsTypes.CHANGE_SORTING_TYPE,
  payload: {
    sort,
  },
});

export const setError = (error: string): IFetchGamesFailure | IFetchTopGamesFailure => ({
  type: GamesActionsTypes.FETCH_GAMES_FAILURE,
  payload: {
    error,
  },
});

export const showSpinner = (showSpinner: boolean): IShowSpinner => ({
  type: GamesActionsTypes.SHOW_SPINNER,
  payload: {
    showSpinner,
  },
});
