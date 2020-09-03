import {actionTypes} from '../actions/action-types';

export type Action<T> = {type: actionTypes; payload: T};
