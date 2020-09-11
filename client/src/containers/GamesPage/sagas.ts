import { getAllGames } from 'api/services/gamesService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setGames, setTopsGames, showSpinner } from 'containers/GamesPage/actions';
import { IFetchGamesRequest, GamesActionsTypes, IFetchTopGamesRequest } from 'containers/GamesPage/actionTypes';
import { getAllTopGames as getTopGames } from 'api/services/topgameService';

function* fetchGames(action: IFetchGamesRequest) {
  try {
    yield put(showSpinner(true));
    const { data: games, meta: gamesMeta } = yield call(getAllGames, action.payload);
    yield put(setGames(games, gamesMeta.globalCount));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(showSpinner(false));
  }
}

function* watchFetchGames() {
  yield takeLatest(GamesActionsTypes.FETCH_GAMES_REQUEST, fetchGames);
}

function* fetchTopGames(action: IFetchTopGamesRequest) {
  try {
    yield put(showSpinner(true));
    const topGames = yield call(getTopGames, { from: 0, count: 5 });
    if (topGames) {
      yield put(setTopsGames(topGames.data));
    }
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(showSpinner(false));
  }
}

function* watchFetchTopGames() {
  yield takeLatest(GamesActionsTypes.FETCH_TOP_GAMES_REQUEST, fetchTopGames);
}

export default function* gamesPageSagas() {
  yield all([watchFetchGames(), watchFetchTopGames()]);
}
