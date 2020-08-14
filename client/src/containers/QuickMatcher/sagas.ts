import { getAllGames } from 'api/services/gameService';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { setError, setGames } from './actions';
import { GameActionTypes, IFetchGamesRequestAction } from './actionTypes';

function* fetchGames(action: IFetchGamesRequestAction) {
  try {
    const { data: games } = yield call(getAllGames, { name: action.name });
    yield put(setGames(games));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchGames() {
  yield takeEvery(GameActionTypes.FETCH_GAMES_REQUEST, fetchGames);
}

export default function* quickMatcherSagas() {
  yield all([watchFetchGames()]);
}
