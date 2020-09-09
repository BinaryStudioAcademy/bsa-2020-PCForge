import { LikeCommentState, LikeCommentActionTypes, CommentLikeRequestAction } from './actionTypes';

const initialState: LikeCommentState = {
  countLikes: 0,
  countDisLikes: 0,
  updatedLikes: false,
  commentId: 0,
  comment: undefined,
};

export default function LikeCommentReducer(state = initialState, action: CommentLikeRequestAction) {
  switch (action.type) {
    case LikeCommentActionTypes.LIKE_COMMENT_SUCCESS: {
      return {
        ...state,
        countLikes: action.payload.countLikes,
        countDisLikes: action.payload.countDisLikes,
        updatedLikes: true,
        commentId: action.payload.commentId,
      };
    }
    case LikeCommentActionTypes.EDIT_COMMENT_SUCCESS: {
      return {
        ...state,
        comment: action.payload.comment,
      };
    }
    default:
      return state;
  }
}
