import { Game } from 'common/models/game';
import { Setup } from 'common/models/setup';
import { SetupPerformance } from 'common/models/setupPerformance';
import { TopGame } from 'common/models/topGame';
import { SetupChartActions, SetupChartTypes } from './actionTypes';

export const fetchGamesByName = (name: string): SetupChartActions => ({
  type: SetupChartTypes.FETCH_GAMES_REQUEST,
  payload: {
    name,
  },
});

export const fetchTopGames = (): SetupChartActions => ({
  type: SetupChartTypes.FETCH_TOP_GAMES_REQUEST,
  payload: {
    from: 0,
    count: 5,
  },
});

export const fetchSetup = (id: number): SetupChartActions => ({
  type: SetupChartTypes.FETCH_SETUP_REQUEST,
  payload: {
    id,
  },
});

export const fetchPerformanceAnalysis = (setupId: number, gameId: number): SetupChartActions => ({
  type: SetupChartTypes.FETCH_PERFORMANCE_REQUEST,
  payload: {
    setupId,
    gameId,
  },
});

export const setGames = (games: Game[]): SetupChartActions => ({
  type: SetupChartTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
  },
});

export const setSetup = (setup: Setup): SetupChartActions => ({
  type: SetupChartTypes.FETCH_SETUP_SUCCESS,
  payload: {
    setup,
  },
});

export const setTopGames = (topGames: TopGame[]): SetupChartActions => ({
  type: SetupChartTypes.FETCH_TOP_GAMES_SUCCESS,
  payload: {
    topGames,
  },
});

export const setPerformance = (performance: SetupPerformance): SetupChartActions => ({
  type: SetupChartTypes.FETCH_PERFORMANCE_SUCCESS,
  payload: {
    performance,
  },
});

export const setError = (error: string): SetupChartActions => ({
  type: SetupChartTypes.ERROR,
  payload: {
    error,
  },
});
