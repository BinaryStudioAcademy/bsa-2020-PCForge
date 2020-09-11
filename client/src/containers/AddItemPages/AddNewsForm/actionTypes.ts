import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { TypeAddNews } from 'common/models/typeNews';
import { AlertType } from 'components/BasicComponents/Alert';

export enum NewsFormActionTypes {
  GET_INITIAL_VALUES = 'GET_INITIAL_VALUES',
  GET_INITIAL_VALUES_SUCCESS = 'GET_INITIAL_VALUES_SUCCESS',
  CLEAR_NEWS_STATE_VALUES_ACTION = 'CLEAR_NEWS_STATE_VALUES_ACTION',
  CLEAR_NEWS_STATE_VALUES_SUCCESS = 'CLEAR_NEWS_STATE_VALUES_SUCCESS',
  GET_INITIAL_VALUES_ERROR = 'GET_INITIAL_VALUES_ERROR',
  CREATE_NEW_NEWS_ACTION = 'CREATE_NEW_NEWS_ACTION',
  CREATE_NEW_NEWS_SUCCESS = 'CREATE_NEW_NEWS_SUCCESS',
}

export interface IGetInitialValueAction {
  type: NewsFormActionTypes.GET_INITIAL_VALUES;
}

export interface IClearStateValuesAction {
  type: NewsFormActionTypes.CLEAR_NEWS_STATE_VALUES_ACTION;
}
export interface IClearStateValuesSuccess {
  type: NewsFormActionTypes.CLEAR_NEWS_STATE_VALUES_SUCCESS;
}

export interface ICreateNewsAction {
  type: NewsFormActionTypes.CREATE_NEW_NEWS_ACTION;
  payload: {
    news: TypeAddNews;
    imageData: Blob;
  };
}

export interface ICreateNewsSuccess {
  type: NewsFormActionTypes.CREATE_NEW_NEWS_SUCCESS;
  payload: {
    title: string;
  };
}

export interface ILoadNewsFormError {
  type: NewsFormActionTypes.GET_INITIAL_VALUES_ERROR;
  payload: {
    errorMessage: string;
    alertType?: AlertType;
  };
}

export interface NewsFormState {
  errorMessage?: string;
  title?: string;
  alertType?: AlertType;
}

export type NewsFormAction =
  | IGetInitialValueAction
  | ICreateNewsAction
  | ICreateNewsSuccess
  | ILoadNewsFormError
  | IClearStateValuesAction
  | IClearStateValuesSuccess;
