import { defaultGame, defaultPerformance } from 'common/models/defaults';
import { SetupChartActions, SetupChartState, SetupChartTypes } from './actionTypes';

const initialState: SetupChartState = {
  searchedGames: [],
  topGames: [],
  game: defaultGame,
  cpu: null,
  gpu: null,
  ramSize: null,
  performance: defaultPerformance,
  error: '',
};

export function SetupChartReducer(state = initialState, action: SetupChartActions): SetupChartState {
  switch (action.type) {
    case SetupChartTypes.FETCH_TOP_GAMES_SUCCESS: {
      return {
        ...state,
        topGames: action.payload.topGames,
      };
    }

    case SetupChartTypes.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        searchedGames: action.payload.games,
      };
    }

    case SetupChartTypes.FETCH_PERFORMANCE_SUCCESS: {
      return {
        ...state,
        performance: action.payload.performance,
      };
    }

    case SetupChartTypes.SET_CPU: {
      return {
        ...state,
        cpu: action.payload.cpu,
      };
    }

    case SetupChartTypes.SET_GPU: {
      return {
        ...state,
        gpu: action.payload.gpu,
      };
    }

    case SetupChartTypes.SET_RAM: {
      return {
        ...state,
        ramSize: action.payload.ramSize,
      };
    }

    case SetupChartTypes.SET_GAME: {
      return {
        ...state,
        game: action.payload.game,
      };
    }

    default:
      return state;
  }
}
