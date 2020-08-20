import { getAllGames } from 'api/services/gameService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setGames } from './actions';
import { GameActionTypes, IFetchGamesRequestAction } from './actionTypes';

function* fetchGames(action: IFetchGamesRequestAction) {
  try {
    const { data: games } = yield call(getAllGames, { name: action.payload.name, from: 0, count: 150 });
    yield put(setGames(games));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchGames() {
  yield takeLatest(GameActionTypes.FETCH_GAMES_REQUEST, fetchGames);
}

export default function* quickMatcherSagas() {
  yield all([watchFetchGames()]);
}
