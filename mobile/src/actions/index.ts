import {actionTypes} from './action-types';
import {Contact} from 'react-native-contacts';

const makeActionHandler = <T>(actionType: actionTypes) => {
  return (data?: T) => ({
    type: actionType,
    payload: data,
  });
};

export const getContacts = makeActionHandler<Contact[]>(
  actionTypes.getContacts,
);
export const deleteContact = makeActionHandler<Contact>(
  actionTypes.deleteContact,
);
export const updateContact = makeActionHandler<Contact>(
  actionTypes.updateContact,
);
