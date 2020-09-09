import { ICommentLikeFilter } from 'api/services/commentRate.service';
import { CommentRate } from 'common/models/commentRate';
import { Comment, CommentCreationAttributes } from 'common/models/comment';

export enum LikeCommentActionTypes {
  LIKE_COMMENT_ACTION = 'LIKE_COMMENT_ACTION',
  LIKE_COMMENT_SUCCESS = 'LIKE_COMMENT_SUCCESS',
  EDIT_COMMENT_ACTION = 'EDIT_COMMENT_ACTION',
  EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS',
}

export interface ILikeAction {
  type: LikeCommentActionTypes.LIKE_COMMENT_ACTION;
  payload: {
    isLike: boolean;
    commentId: number;
    updatedLikes: boolean;
  };
}
export interface ILikeSuccess {
  type: LikeCommentActionTypes.LIKE_COMMENT_SUCCESS;
  payload: {
    countLikes: number;
    countDisLikes: number;
    updatedLikes: boolean;
    commentId: number;
  };
}

export interface IEditAction {
  type: LikeCommentActionTypes.EDIT_COMMENT_ACTION;
  payload: {
    commentId: number;
    comment: CommentCreationAttributes;
  };
}

export interface IEditSuccess {
  type: LikeCommentActionTypes.EDIT_COMMENT_SUCCESS;
  payload: {
    comment: Comment;
  };
}

export interface LikeCommentState {
  countLikes: number;
  countDisLikes: number;
  updatedLikes: boolean;
  commentId: number;
  comment?: Comment;
}

export type CommentLikeRequestAction = ILikeAction | ILikeSuccess | IEditAction | IEditSuccess;
