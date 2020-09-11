import { NewsFormAction, NewsFormActionTypes, NewsFormState } from './actionTypes';
import { AlertType } from 'components/BasicComponents/Alert';

const initialState: NewsFormState = {
  errorMessage: undefined,
  title: undefined,
  alertType: undefined,
};

export function NewsFormReducer(state = initialState, action: NewsFormAction): NewsFormState {
  switch (action.type) {
    case NewsFormActionTypes.GET_INITIAL_VALUES_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        alertType: AlertType.error,
      };
    }
    case NewsFormActionTypes.CLEAR_NEWS_STATE_VALUES_SUCCESS: {
      return {
        ...state,
        errorMessage: undefined,
        title: undefined,
        alertType: undefined,
      };
    }
    case NewsFormActionTypes.CREATE_NEW_NEWS_SUCCESS: {
      return {
        ...state,
        title: action.payload.title,
        alertType: AlertType.success,
      };
    }
    default:
      return state;
  }
}
