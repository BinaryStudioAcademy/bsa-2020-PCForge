import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { uploadImage } from 'api/services/imageService';
import { postGame } from 'api/services/gameService';
import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { FilterModel } from 'common/models/filter.model';
import * as notification from 'common/services/notificationService';

import { loadAllSelectsInitialValues, loadError, loadCreatedGame } from './actions';
import {
  GameFormActionTypes,
  IGetInitialValueAction,
  IUploadMoreItemsAction,
  typesHardware,
  ICreateGameAction,
} from './actionTypes';

function* getAllSelectsInitialValuesRequests(action: IGetInitialValueAction) {
  try {
    const { data: CPUdata } = yield call(getAllCpu, {});
    const CPUList: SelectOption[] = CPUdata.map((item: TypeCpu) => {
      return { value: item.id, label: item.name };
    });
    const { data: GPUdata } = yield call(getAllGpu, {});
    const GPUList: SelectOption[] = GPUdata.map((item: TypeGpu) => {
      return { value: item.id, label: item.name };
    });
    yield put(loadAllSelectsInitialValues(CPUList, GPUList, CPUList, GPUList));
  } catch (error) {
    yield put(loadError(error.message));
  }
}

function* watchGetAllSelectsInitialValuesRequests() {
  yield takeEvery(GameFormActionTypes.GET_INITIAL_VALUES, getAllSelectsInitialValuesRequests);
}

function* createGame(action: ICreateGameAction) {
  try {
    const { game, imageData } = action.payload;
    //game.image = yield call(uploadImage, imageData);
    game.image = 'testURL';
    const gameCreated = yield call(postGame, game);
    console.log(gameCreated);
    notification.success(`Game ${gameCreated.name} has been created`);
    yield put(loadCreatedGame(gameCreated.name));
  } catch (error) {
    notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreateGame() {
  yield takeEvery(GameFormActionTypes.CREATE_NEW_GAME_ACTION, createGame);
}

function* uploadMoreItems(action: IUploadMoreItemsAction) {
  try {
    const filter: FilterModel = {
      name: action.payload.name,
      count: 20,
      from: action.payload.offset,
    };
    const { typeHardware, typeAction } = action.payload;
    let response: TypeResponseAllCpus | TypeResponseAllGpus;
    let valuesList: SelectOption[] = [];
    switch (typeHardware) {
      case typesHardware.cpu: {
        response = yield call(getAllCpu, filter);
        valuesList = (response.data as Array<TypeCpu | TypeGpu>).map((item: TypeCpu | TypeGpu) => {
          return { value: item.id, label: item.name };
        });
        break;
      }
      case typesHardware.gpu: {
        response = yield call(getAllGpu, filter);
        valuesList = (response.data as Array<TypeCpu | TypeGpu>).map((item: TypeCpu | TypeGpu) => {
          return { value: item.id, label: item.name };
        });
        break;
      }
    }
    yield put({ type: typeAction, payload: { valuesList } });
  } catch (error) {
    yield put(loadError(error));
  }
}

function* watchUploadMoreItems() {
  yield takeEvery(GameFormActionTypes.UPLOAD_MORE_VALUES, uploadMoreItems);
}

export default function* GameFormSagas() {
  yield all([watchGetAllSelectsInitialValuesRequests(), watchUploadMoreItems(), watchCreateGame()]);
}
