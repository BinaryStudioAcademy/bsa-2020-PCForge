import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { likeCommentSuccess } from './actions';
import { ILikeAction, LikeCommentActionTypes } from './actionTypes';
import { ICommentLikeFilter, postCommentLike, getAllCommentLikes } from 'api/services/commentRate.service';

function* likeComment(action: ILikeAction) {
  try {
    const request: ICommentLikeFilter = {
      isLiked: action.payload.isLike,
      commentId: action.payload.commentId,
    };
    yield call(postCommentLike, request);

    const filterLikes: ICommentLikeFilter = {
      isLiked: true,
      commentId: action.payload.commentId,
    };
    const filterDisLikes: ICommentLikeFilter = {
      isLiked: false,
      commentId: action.payload.commentId,
    };
    const { meta: likes } = yield call(getAllCommentLikes, filterLikes);
    const countLikes = likes.countAfterFiltering;
    const { meta: disLikes } = yield call(getAllCommentLikes, filterDisLikes);
    const countDisLikes = disLikes.countAfterFiltering;

    yield put(likeCommentSuccess(countLikes, countDisLikes, action.payload.commentId));
  } catch (error) {
    console.log(error); // add action on error
  }
}

function* watchLikeComment() {
  yield takeEvery(LikeCommentActionTypes.LIKE_COMMENT_ACTION, likeComment);
}

export default function* likeCommentSaga() {
  yield all([watchLikeComment()]);
}
