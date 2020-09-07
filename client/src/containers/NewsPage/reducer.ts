import { AnyAction } from 'redux';
import { TypeNews } from 'common/models/typeNews';
import { FETCH_NEWS_SUCCESS } from './actionTypes';

export type TypeNewsState = {
  news: TypeNews[];
};

const initialState: TypeNewsState = {
  news: [],
};

export default function (state = initialState, action: AnyAction): TypeNewsState {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS: {
      return {
        ...state,
        news: action.payload,
      };
    }

    default:
      return state;
  }
}
