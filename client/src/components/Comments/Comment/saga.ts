import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { likeCommentSuccess, updateComment } from './actions';
import { ILikeAction, LikeCommentActionTypes, IEditAction } from './actionTypes';
import { ICommentLikeFilter, postCommentLike, getAllCommentLikes } from 'api/services/commentRate.service';
import { editComment } from 'api/services/comment.service';
import { Comment } from 'common/models/comment';
import * as alert from 'common/services/AlertService/alert.service';
import { addAlert } from 'containers/Alerts/redux/actions';

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
    yield put(addAlert(alert.error(error.message || 'Failed like comment')));
  }
}

function* watchLikeComment() {
  yield takeEvery(LikeCommentActionTypes.LIKE_COMMENT_ACTION, likeComment);
}

function* editCommentAction(action: IEditAction) {
  try {
    const updatedComment: Comment = yield call(editComment, action.payload.commentId, action.payload.comment);
    yield put(updateComment(updatedComment));
  } catch (error) {
    yield put(addAlert(alert.error(error.message || 'Failed edit comment')));
  }
}

function* watchEditCommentAction() {
  yield takeEvery(LikeCommentActionTypes.EDIT_COMMENT_ACTION, editCommentAction);
}

export default function* likeCommentSaga() {
  yield all([watchLikeComment(), watchEditCommentAction()]);
}
