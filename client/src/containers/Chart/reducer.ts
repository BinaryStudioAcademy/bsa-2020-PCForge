import { SetupChartActions, SetupChartState, SetupChartTypes } from './actionTypes';

const initialState: SetupChartState = {
  searchedGames: [],
  topGames: [],
  performance: {
    setup: {
      id: 0,
      rating: 0,
      title: '',
      image: '',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    overallCpu: 0,
    overallGpu: 0,
    overallRam: 0,
    fpsAnalysis: [],
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

    case SetupChartTypes.FETCH_PERFORMANCE_SUCCESS: {
      return {
        ...state,
        performance: action.payload.performance,
      };
    }

    default:
      return state;
  }
}
