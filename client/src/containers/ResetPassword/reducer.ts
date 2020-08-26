import { ResetPasswordActions, ResetPasswordActionTypes, ResetPasswordState } from './actionTypes';

const initialState: ResetPasswordState = {
  error: '',
};

export function ResetPasswordReducer(state = initialState, action: ResetPasswordActions): ResetPasswordState {
  switch (action.type) {
    case ResetPasswordActionTypes.ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
}
