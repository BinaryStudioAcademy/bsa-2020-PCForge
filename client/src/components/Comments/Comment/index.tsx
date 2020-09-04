import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import Tooltip from '@material-ui/core/Tooltip';

import { Comment } from 'common/models/comment';
import { User } from 'common/models/user';

import UserAvatar from 'components/UserAvatar';
import RatingBox from 'components/RatingBox';

import * as actions from './actions';
import { LikeCommentState, LikeCommentActionTypes, CommentLikeRequestAction } from './actionTypes';

import styles from './styles.module.scss';

interface Props {
  comment: Comment;
  state: LikeCommentState;
  currentUser: User | null;
  likeCommentAction: (commentId: number) => CommentLikeRequestAction;
  disLikeCommentAction: (commentId: number) => CommentLikeRequestAction;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const { comment, likeCommentAction, disLikeCommentAction, currentUser } = props;
  const [countLikes, setCountLikes] = useState(comment.countLikes);
  const [countDisLikes, setCountDisLikes] = useState(comment.countDislikes);
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(comment.isLikedByCurrentUser);
  const [isDisLikedByCurrentUser, setIsDisLikedByCurrentUser] = useState(comment.isDislikedByCurrentUser);

  const createdDate = new Date(comment.createdAt);
  const updatedDate = new Date(comment.updatedAt);

  const differentMilisecondsBetweenDates = Math.abs(createdDate.getTime() - updatedDate.getTime());
  const edited = differentMilisecondsBetweenDates <= 10 ? null : 'Edited';

  const currentUserId = currentUser?.id;
  const isAuthor = currentUserId && currentUserId === comment.user.id;

  if (props.state.countLikes !== countLikes && props.state.updatedLikes && props.state.commentId === comment.id) {
    setCountLikes(props.state.countLikes);
    setIsLikedByCurrentUser(!isLikedByCurrentUser);
  }
  if (props.state.countDisLikes !== countDisLikes && props.state.updatedLikes && props.state.commentId === comment.id) {
    setCountDisLikes(props.state.countDisLikes);
    setIsDisLikedByCurrentUser(!isDisLikedByCurrentUser);
  }
  return (
    <li className={styles.commentRoot}>
      <div className={styles.commentWrapper}>
        <div className={styles.commentMeta}>
          <UserAvatar user={comment.user} />
          <div className={styles.commentRateInfo}>
            <span className={styles.commentAuthor}>{comment.user!.name || comment.user!.email}</span>
            {comment.itemRateByAuthorComment ? (
              <RatingBox ratingValue={comment.itemRateByAuthorComment} disabled={true} name={comment.id.toString()} />
            ) : null}
          </div>
          <div className={styles.commentButtonsHeader}>
            {isAuthor ? (
              <Tooltip title={'Edit'} placement="left-start" arrow>
                <EditIcon fontSize="small" className={styles.commentIcons} onClick={() => alert('edit!')} />
              </Tooltip>
            ) : null}
            {isAuthor || currentUser?.isAdmin ? (
              <Tooltip title={'Delete'} placement="right-start" arrow>
                <DeleteIcon fontSize="small" className={styles.commentIcons} onClick={() => alert('delete!')} />
              </Tooltip>
            ) : null}
          </div>
        </div>
        <div className={styles.commentDateContainer}>
          <div className={styles.commentDate}>{`Created on ${createdDate.toUTCString()}`}</div>
          <div className={styles.commentDate}>{edited}</div>
        </div>
        <p className={styles.commentBody}>{comment.value}</p>
        <div className={styles.commentFooter}>
          <div className={styles.likeContainer}>
            <span key={`${comment.id}-likes`}>{countLikes}</span>
            {isLikedByCurrentUser ? (
              <Tooltip title={'Not useful anymore'} placement="left-start" arrow>
                <ThumbUpAltRoundedIcon className={styles.iconLike} onClick={() => likeCommentAction(comment.id)} />
              </Tooltip>
            ) : (
              <Tooltip title={'Useful'} placement="left-start" arrow>
                <ThumbUpAltOutlinedIcon className={styles.iconLike} onClick={() => likeCommentAction(comment.id)} />
              </Tooltip>
            )}
          </div>
          <div className={styles.likeContainer}>
            {isDisLikedByCurrentUser ? (
              <Tooltip title={'No longer useless'} placement="right-start" arrow>
                <ThumbDownRoundedIcon className={styles.iconLike} onClick={() => disLikeCommentAction(comment.id)} />
              </Tooltip>
            ) : (
              <Tooltip title={'Useless'} placement="right-start" arrow>
                <ThumbDownOutlinedIcon className={styles.iconLike} onClick={() => disLikeCommentAction(comment.id)} />
              </Tooltip>
            )}
            <span key={`${comment.id}-dislikes`}>{countDisLikes}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.likeComment,
  currentUser: state.auth.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
