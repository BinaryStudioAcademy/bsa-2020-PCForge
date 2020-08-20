import { defaultSetup } from 'common/models/defaults';
import { SetupChartActions, SetupChartState, SetupChartTypes } from './actionTypes';

const initialState: SetupChartState = {
  searchedGames: [],
  topGames: [],
  setup: defaultSetup,
  performance: {
    fpsAnalysis: [],
    report: {
      minimal: {
        cpu: 100,
        gpu: 100,
        ram: 100,
      },
      recommended: {
        cpu: 100,
        gpu: 100,
        ram: 100,
      },
    },
    overall: {
      cpu: 0,
      gpu: 0,
      ram: 0,
    },
  },
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

    case SetupChartTypes.FETCH_SETUP_SUCCESS: {
      return {
        ...state,
        setup: action.payload.setup,
      };
    }

    default:
      return state;
  }
}
