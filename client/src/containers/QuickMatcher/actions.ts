import { Game } from 'common/models/game';
import { ISetupPerformance } from 'common/models/setupPerformance';
import { QuickMatcherActionTypes, QuickMatcherActions } from './actionTypes';

export const fetchGames = (name: string): QuickMatcherActions => ({
  type: QuickMatcherActionTypes.FETCH_GAMES_REQUEST,
  payload: {
    name,
  },
});

export const setGames = (games: Game[]): QuickMatcherActions => ({
  type: QuickMatcherActionTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
  },
});

export const fetchPerformanceAnalysis = (payload: {
  cpuId: number;
  gpuId: number;
  ramSize: number;
  gameId: number;
}): QuickMatcherActions => ({
  type: QuickMatcherActionTypes.FETCH_PERFORMANCE_REQUEST,
  payload,
});

export const setPerformance = (performance: ISetupPerformance): QuickMatcherActions => ({
  type: QuickMatcherActionTypes.FETCH_PERFORMANCE_SUCCESS,
  payload: {
    performance,
  },
});

export const selectGame = (game: Game): QuickMatcherActions => ({
  type: QuickMatcherActionTypes.SELECT_GAME,
  payload: {
    game,
  },
});

export const setError = (error: string): QuickMatcherActions => ({
  type: QuickMatcherActionTypes.ERROR,
  payload: {
    error,
  },
});
