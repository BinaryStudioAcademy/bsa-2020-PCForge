import { GameFormAction, GameFormActionTypes, IHardwareFilter } from './actionTypes';
import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { GameCreationAttributes } from 'common/models/game';

export const getAllSelectsInitialValues = (): GameFormAction => ({
  type: GameFormActionTypes.GET_INITIAL_VALUES,
});

export const loadAllSelectsInitialValues = (
  recCPUList: SelectOption[],
  recGPUList: SelectOption[],
  minCPUList: SelectOption[],
  minGPUList: SelectOption[]
): GameFormAction => ({
  type: GameFormActionTypes.GET_INITIAL_VALUES_SUCCESS,
  payload: {
    recCPUList,
    recGPUList,
    minCPUList,
    minGPUList,
  },
});

export const loadError = (error: string): GameFormAction => ({
  type: GameFormActionTypes.GET_INITIAL_VALUES_ERROR,
  payload: {
    error,
  },
});

export const uploadMoreItems = (filter: IHardwareFilter): GameFormAction => ({
  type: GameFormActionTypes.UPLOAD_MORE_VALUES,
  payload: filter,
});

export const createGame = (game: GameCreationAttributes, imageData: Blob): GameFormAction => ({
  type: GameFormActionTypes.CREATE_NEW_GAME_ACTION,
  payload: {
    game,
    imageData,
  },
});

export const loadCreatedGame = (gameName: string): GameFormAction => ({
  type: GameFormActionTypes.CREATE_NEW_GAME_SUCCESS,
  payload: {
    gameName,
  },
});
