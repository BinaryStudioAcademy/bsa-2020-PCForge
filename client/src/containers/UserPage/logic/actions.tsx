import {
    LOAD_USER,
    LOAD_USER_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    CANCEL_EDIT_USER,
} from './actionTypes'

export const loadUser = (id: string) => ({
    type: LOAD_USER,
    payload : { id }
});

export const loadUserSuccess = (data: {}) => ({
    type: LOAD_USER_SUCCESS,
    payload: data
});

export const updateUser = (data: {}) => ({
    type: UPDATE_USER,
    payload: data
});

export const updateUserSuccess = (data: {}) => ({
    type: UPDATE_USER_SUCCESS,
    payload: data
});

export const cancelEditUser = () => ({
    type: CANCEL_EDIT_USER
});

