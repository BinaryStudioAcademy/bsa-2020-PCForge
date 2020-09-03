import {actionTypes} from '../actions/action-types';
import {contactsService} from '../services/contacts-service';
import {call, put, all, takeEvery} from 'redux-saga/effects';
import {Contact} from 'react-native-contacts';
import {Action} from '../types/action';

function* getContacts() {
  try {
    const contacts: Contact[] = yield call(contactsService.getAll);
    yield put({type: actionTypes.setContacts, payload: contacts});
  } catch (error) {
    // alert(error.message);
  }
}

export function* watchGetContacts() {
  yield takeEvery(actionTypes.getContacts, getContacts);
}

function* deleteContact(action: Action<Contact>) {
  try {
    yield call(contactsService.deleteOne, action.payload);
    yield put({type: actionTypes.getContacts});
  } catch (error) {
    // alert(error.message);
  }
}

export function* watchDeleteContact() {
  yield takeEvery(actionTypes.deleteContact, deleteContact);
}

function* updateContact(action: Action<Contact>) {
  try {
    const updated: Contact = yield call(
      contactsService.updateOne,
      action.payload,
    );
    yield put({type: actionTypes.updateContactSuccess, payload: updated});
  } catch (error) {}
}

export function* watchUpdateUser() {
  yield takeEvery(actionTypes.updateContact, updateContact);
}

export default function* ContactsSagas() {
  yield all([watchGetContacts(), watchDeleteContact(), watchUpdateUser()]);
}
