import { LikeCommentActionTypes, CommentLikeRequestAction } from './actionTypes';

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
