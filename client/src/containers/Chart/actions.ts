import { Cpu } from 'common/models/cpu';
import { Game } from 'common/models/game';
import { Gpu } from 'common/models/gpu';
import { ISetupPerformance } from 'common/models/setupPerformance';
import { TopGame } from 'common/models/topGame';
import { SetupChartActions, SetupChartTypes } from './actionTypes';

export const fetchGamesByName = (name: string): SetupChartActions => ({
  type: SetupChartTypes.FETCH_GAMES_REQUEST,
  payload: {
    name,
  },
});

export const fetchPerformanceAnalysis = (
  cpuId: number,
  gpuId: number,
  ramSize: number,
  gameId: number
): SetupChartActions => ({
  type: SetupChartTypes.FETCH_PERFORMANCE_REQUEST,
  payload: {
    cpuId,
    gpuId,
    ramSize,
    gameId,
  },
});

export const setGames = (games: Game[]): SetupChartActions => ({
  type: SetupChartTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
  },
});

export const setPerformance = (performance: ISetupPerformance): SetupChartActions => ({
  type: SetupChartTypes.FETCH_PERFORMANCE_SUCCESS,
  payload: {
    performance,
  },
});

export const setCpu = (cpu: Cpu): SetupChartActions => ({
  type: SetupChartTypes.SET_CPU,
  payload: {
    cpu,
  },
});

export const setGpu = (gpu: Gpu): SetupChartActions => ({
  type: SetupChartTypes.SET_GPU,
  payload: {
    gpu,
  },
});

export const setGame = (game: Game): SetupChartActions => ({
  type: SetupChartTypes.SET_GAME,
  payload: {
    game,
  },
});

export const setRamSize = (ramSize: number): SetupChartActions => ({
  type: SetupChartTypes.SET_RAM,
  payload: {
    ramSize,
  },
});

export const setError = (error: string): SetupChartActions => ({
  type: SetupChartTypes.ERROR,
  payload: {
    error,
  },
});
