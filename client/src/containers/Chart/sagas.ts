import { getAllTopGames } from 'api/services/topgameService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setTopGames } from './actions';
import { IFetchTopGamesRequestAction, SetupChartTypes } from './actionTypes';

function* fetchTopGames(action: IFetchTopGamesRequestAction) {
  try {
    const { data: topGames } = yield call(getAllTopGames, action.payload);
    yield put(setTopGames(topGames));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchTopGames() {
  yield takeLatest(SetupChartTypes.FETCH_TOP_GAMES_REQUEST, fetchTopGames);
}

export default function* setupChartSagas() {
  yield all([watchFetchTopGames()]);
}
