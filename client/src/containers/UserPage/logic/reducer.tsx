import {
    UserActionTypes,
    LOAD_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    SHOW_SPINNER,
    HIDE_SPINNER,
} from './actionTypes';

export interface IUserState {
    loadedUser: null | {},
    showSpinner: boolean
}

const initialState: IUserState = {
   loadedUser: null,
   showSpinner: false
}
  
function userReducer(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                showSpinner: true
            };
        case HIDE_SPINNER:
            return {
                ...state,
                showSpinner: false
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loadedUser: action.payload
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loadedUser: action.payload
            }
    }
}

export default userReducer;