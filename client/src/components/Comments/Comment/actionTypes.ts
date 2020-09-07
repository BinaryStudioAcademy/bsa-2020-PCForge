import { ICommentLikeFilter } from 'api/services/commentRate.service';
import { CommentRate } from 'common/models/commentRate';

export enum LikeCommentActionTypes {
  LIKE_COMMENT_ACTION = 'LIKE_COMMENT_ACTION',
  LIKE_COMMENT_SUCCESS = 'LIKE_COMMENT_SUCCESS',
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

export interface LikeCommentState {
  countLikes: number;
  countDisLikes: number;
  updatedLikes: boolean;
  commentId: number;
}

export type CommentLikeRequestAction = ILikeAction | ILikeSuccess;
