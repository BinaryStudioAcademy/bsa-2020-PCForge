import { getAllTopGames } from 'api/services/topgameService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setTopGames } from './actions';
import { IFetchTopGamesRequestAction, TopGamesTypes } from './actionTypes';

function* fetchTopGames(action: IFetchTopGamesRequestAction) {
  try {
    const { data: topGames } = yield call(getAllTopGames, action.payload);
    yield put(setTopGames(topGames));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchTopGames() {
  yield takeLatest(TopGamesTypes.FETCH_TOP_GAMES_REQUEST, fetchTopGames);
}

export default function* TopGamesSagas() {
  yield all([watchFetchTopGames()]);
}
