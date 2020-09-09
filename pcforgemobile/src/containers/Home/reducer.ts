import {HomeState} from './interfaces';
import {GET_NEWS_SUCCESS, HomeActionTyeps} from './actionTypes';

const initialState: HomeState = {
  news: [],
  itemsCount: 0,
};

export function HomeReducer(
  state: HomeState = initialState,
  action: HomeActionTyeps,
): HomeState {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        itemsCount: action.payload.meta.countAfterFiltering,
        news: action.payload.data,
      };
    default:
      return state;
  }
}
