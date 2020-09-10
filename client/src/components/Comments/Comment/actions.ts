import { LikeCommentActionTypes, CommentLikeRequestAction } from './actionTypes';
import { Comment, CommentCreationAttributes } from 'common/models/comment';

export const likeCommentAction = (commentId: number): CommentLikeRequestAction => ({
  type: LikeCommentActionTypes.LIKE_COMMENT_ACTION,
  payload: {
    isLike: true,
    commentId,
    updatedLikes: false,
  },
});

export const disLikeCommentAction = (commentId: number): CommentLikeRequestAction => ({
  type: LikeCommentActionTypes.LIKE_COMMENT_ACTION,
  payload: {
    isLike: false,
    commentId,
    updatedLikes: false,
  },
});

export const likeCommentSuccess = (
  countLikes: number,
  countDisLikes: number,
  commentId: number
): CommentLikeRequestAction => ({
  type: LikeCommentActionTypes.LIKE_COMMENT_SUCCESS,
  payload: {
    countLikes,
    countDisLikes,
    updatedLikes: true,
    commentId,
  },
});

export const editComment = (commentId: number, comment: CommentCreationAttributes): CommentLikeRequestAction => ({
  type: LikeCommentActionTypes.EDIT_COMMENT_ACTION,
  payload: {
    commentId,
    comment,
  },
});

export const updateComment = (comment: Comment): CommentLikeRequestAction => ({
  type: LikeCommentActionTypes.EDIT_COMMENT_SUCCESS,
  payload: {
    comment,
  },
});
