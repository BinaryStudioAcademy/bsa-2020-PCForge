import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';
import moment from 'moment';

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
import RatingBox from 'components/BasicComponents/RatingBox';

import * as actions from './actions';
import { LikeCommentState, LikeCommentActionTypes, CommentLikeRequestAction } from './actionTypes';

import styles from './styles.module.scss';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginLeft: 20,
    },
  })
);

interface Props {
  comment: Comment;
  state: LikeCommentState;
  currentUser: User | null;
  likeCommentAction: (commentId: number) => CommentLikeRequestAction;
  disLikeCommentAction: (commentId: number) => CommentLikeRequestAction;
  commentRef?: React.RefObject<HTMLDivElement>;
  highlight?: boolean;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const materialStyles = useStyles();
  const { comment, likeCommentAction, disLikeCommentAction, currentUser, commentRef, highlight } = props;
  const [countLikes, setCountLikes] = useState(comment.countLikes);
  const [countDisLikes, setCountDisLikes] = useState(comment.countDislikes);
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(comment.isLikedByCurrentUser);
  const [isDisLikedByCurrentUser, setIsDisLikedByCurrentUser] = useState(comment.isDislikedByCurrentUser);

  const createdDateValue = new Date(comment.createdAt);
  const updatedDateValue = new Date(comment.updatedAt);

  const differentMilisecondsBetweenDates = Math.abs(createdDateValue.getTime() - updatedDateValue.getTime());
  const edited = differentMilisecondsBetweenDates <= 10 ? null : 'Edited';
  const createdDate = moment(comment.createdAt).fromNow();
  const updatedDate = moment(comment.updatedAt).fromNow();

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
}
  return (
    <li className={styles.commentRoot}>
      <div className={styles.commentWrapper} ref={commentRef}>
        <div className={styles.commentMeta}>
          <UserAvatar user={comment.user} />
          <div className={styles.commentRateInfo}>
            <div>
              <span className={styles.commentAuthor}>{comment.user!.name || comment.user!.email}</span>
              {highlight && <NewReleasesIcon classes={{ root: materialStyles.icon }} />}
              <div className={styles.commentDateContainer}>
                <div className={styles.commentDate}>{`Created ${createdDate}`}</div>
                <Tooltip title={updatedDate} placement="right-start" arrow>
                  <div className={styles.commentDate}>{edited}</div>
                </Tooltip>
              </div>
            </div>
            <div>
              {comment.itemRateByAuthorComment ? (
                <RatingBox ratingValue={comment.itemRateByAuthorComment} disabled={true} name={comment.id.toString()} />
              ) : null}
            </div>
          </div>
          <div className={styles.commentButtonsHeader}>
            {isAuthor ? (
              <Tooltip title={'Edit'} placement="left-start" arrow>
                <EditIcon fontSize="small" className={styles.commentIcons} onClick={() => alert('To do edit!')} />
              </Tooltip>
            ) : null}
            {isAuthor || currentUser?.isAdmin ? (
              <Tooltip title={'Delete'} placement="right-start" arrow>
                <DeleteIcon fontSize="small" className={styles.commentIcons} onClick={() => alert('To do delete!')} />
              </Tooltip>
            ) : null}
          </div>
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
