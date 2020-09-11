import { LikeCommentState, LikeCommentActionTypes, CommentLikeRequestAction } from './actionTypes';

const initialState: LikeCommentState = {
  countLikes: 0,
  countDisLikes: 0,
  updatedLikes: false,
  commentId: 0,
};

export default function LikeCommentReducer(state = initialState, action: CommentLikeRequestAction): LikeCommentState {
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
    default:
      return state;
  }
}
