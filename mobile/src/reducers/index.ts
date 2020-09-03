import {actionTypes} from '../actions/action-types';
import {AppState} from '../types/app-state';

const initialState: AppState = new AppState();

type action = {type: actionTypes; payload: any};

export default (state: AppState = initialState, action: action): AppState => {
  switch (action.type) {
    case actionTypes.setContacts:
      return {
        ...state,
        contacts: action.payload,
      };
    case actionTypes.updateContactSuccess:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.recordID === action.payload.recordID
            ? action.payload
            : contact,
        ),
      };
    default:
      return state;
  }
};
