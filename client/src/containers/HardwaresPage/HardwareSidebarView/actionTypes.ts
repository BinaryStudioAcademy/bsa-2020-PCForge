import { ReactText } from 'react';
import { TypeResponseAllComments } from 'api/services/comment.service';
import { Rate } from 'common/models/rate.model';

export const GET_HARDWARE_COMMENTS = 'HARDWARE_PAGE_GET_HARDWARE_COMMENTS';
export const GET_HARDWARE_COMMENTS_SUCCESS = 'HARDWARE_PAGE_GET_HARDWARE_COMMENTS_SUCCESS';
export const GET_HARDWARE_COMMENTS_FAILURE = 'HARDWARE_PAGE_GET_HARDWARE_COMMENTS_FAILURE';

export const CREATE_HARDWARE_COMMENT = 'HARDWARE_PAGECREATE_HARDWARE_COMMENT';
export const CREATE_HARDWARE_COMMENT_SUCCESS = 'HARDWARE_PAGECREATE_HARDWARE_COMMENT_SUCCESS';
export const CREATE_HARDWARE_COMMENT_FAILURE = 'HARDWARE_PAGECREATE_HARDWARE_COMMENT_FAILURE';

export const DELETE_HARDWARE_COMMENT = 'HARDWARE_PAGEDELETE_HARDWARE_COMMENT';
export const DELETE_HARDWARE_COMMENT_SUCCESS = 'HARDWARE_PAGEDELETE_HARDWARE_COMMENT_SUCCESS';
export const DELETE_HARDWARE_COMMENT_FAILURE = 'HARDWARE_PAGEDELETE_HARDWARE_COMMENT_FAILURE';

export const GET_HARDWARE_RATE = 'HARDWARE_PAGEGET_HARDWARE_RATE';
export const GET_HARDWARE_RATE_SUCCESS = 'HARDWARE_PAGEGET_HARDWARE_RATE_SUCCESS';
export const GET_HARDWARE_RATE_FAILURE = 'HARDWARE_PAGEGET_HARDWARE_RATE_FAILURE';

export const SET_HARDWARE_RATE = 'HARDWARE_PAGESET_HARDWARE_RATE';
export const SET_HARDWARE_RATE_SUCCESS = 'HARDWARE_PAGESET_HARDWARE_RATE_SUCCESS';
export const SET_HARDWARE_RATE_FAILURE = 'HARDWARE_PAGESET_HARDWARE_RATE_FAILURE';

export const HARDWARE_WIPE_SNACKBAR_DATA = 'HARDWARE_PAGEHARDWARE_WIPE_SNACKBAR_DATA';

export type hardwareTypes = 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';

export interface IGetComments {
  type: typeof GET_HARDWARE_COMMENTS;
  payload: {
    id: number;
    type: hardwareTypes;
    count: number;
    from: number;
  };
}

export interface IGetCommentsSuccess {
  type: typeof GET_HARDWARE_COMMENTS_SUCCESS;
  payload: TypeResponseAllComments;
}

export interface IGetCommentsFailure {
  type: typeof GET_HARDWARE_COMMENTS_FAILURE;
  payload: {
    message: string;
  };
}

export interface ICreateHardwareComment {
  type: typeof CREATE_HARDWARE_COMMENT;
  payload: {
    id: number;
    type: hardwareTypes;
    value: string;
  };
}

export interface ICreateHardwareCommentSuccess {
  type: typeof CREATE_HARDWARE_COMMENT_SUCCESS;
}

export interface ICreateHardwareCommentFailure {
  type: typeof CREATE_HARDWARE_COMMENT_FAILURE;
  payload: {
    message: string;
  };
}

export interface IDeleteHardwareComment {
  type: typeof DELETE_HARDWARE_COMMENT;
  payload: {
    id: number;
    idHardware: number;
  };
}

export interface IDeleteHardwareCommentSuccess {
  type: typeof DELETE_HARDWARE_COMMENT_SUCCESS;
}

export interface IDeleteHardwareCommentFailure {
  type: typeof DELETE_HARDWARE_COMMENT_FAILURE;
  payload: {
    message: string;
  };
}

export interface IGetHardwareRate {
  type: typeof GET_HARDWARE_RATE;
  payload: {
    id: number;
    type: hardwareTypes;
  };
}

export interface IGetHardwareRateSuccess {
  type: typeof GET_HARDWARE_RATE_SUCCESS;
  payload: {
    average: number;
  };
}

export interface IGetHardwareRateFailure {
  type: typeof GET_HARDWARE_RATE_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetHardwareRate {
  type: typeof SET_HARDWARE_RATE;
  payload: {
    id: number;
    type: hardwareTypes;
    value: number;
  };
}

export interface ISetHardwareRateSuccess {
  type: typeof SET_HARDWARE_RATE_SUCCESS;
  payload: Rate;
}

export interface ISetHardwareRateFailure {
  type: typeof SET_HARDWARE_RATE_FAILURE;
  payload: {
    message: string;
  };
}

export interface IHardwareWipeSnackbarData {
  type: typeof HARDWARE_WIPE_SNACKBAR_DATA;
}

export type HardwareActionTypes =
  | IGetComments
  | IGetCommentsSuccess
  | IGetCommentsFailure
  | ICreateHardwareComment
  | ICreateHardwareCommentSuccess
  | ICreateHardwareCommentFailure
  | IDeleteHardwareComment
  | IDeleteHardwareCommentSuccess
  | IDeleteHardwareCommentFailure
  | IGetHardwareRate
  | IGetHardwareRateSuccess
  | IGetHardwareRateFailure
  | ISetHardwareRate
  | ISetHardwareRateSuccess
  | ISetHardwareRateFailure
  | IHardwareWipeSnackbarData;
