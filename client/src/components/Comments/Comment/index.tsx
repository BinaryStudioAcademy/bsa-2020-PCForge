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

import { User } from 'common/models/user';
import { Comment, CommentCreationAttributes } from 'common/models/comment';

import CommentableType from 'common/enums/CommentableItems';

import RatingBox from 'components/BasicComponents/RatingBox';
import Input, { InputType } from 'components/BasicComponents/Input';
import InputForm from 'components/BasicComponents/InputForm';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import ConfirmModalWindow from 'components/ConfirmModal';
import UserAvatar from 'components/UserAvatar';

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
  editComment: (commentId: number, comment: CommentCreationAttributes) => CommentLikeRequestAction;
  deleteCommentAction: (id: number) => void;
  //editCommentAction: (id: number) => void;
  commentRef?: React.RefObject<HTMLDivElement>;
  highlight?: boolean;

  commentableId: number;
  commentableType: CommentableType;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const materialStyles = useStyles();
  const {
    comment,
    likeCommentAction,
    disLikeCommentAction,
    editComment,
    currentUser,
    deleteCommentAction,
    //editCommentAction,
    commentableId,
    commentableType,
    commentRef,
    highlight,
  } = props;
  const [countLikes, setCountLikes] = useState(comment.countLikes);
  const [countDisLikes, setCountDisLikes] = useState(comment.countDislikes);
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(comment.isLikedByCurrentUser);
  const [isDisLikedByCurrentUser, setIsDisLikedByCurrentUser] = useState(comment.isDislikedByCurrentUser);
  const [displayConfirmDeletion, setdisplayConfirmDeletion] = useState(false);
  const [editableComment, setEditableComment] = useState(false);
  const [disableSaveButton, setDisableSaveButton] = useState(false);
  const [commentText, setCommentText] = useState(comment.value);
  //const [commentUpdateDate, setUpdateDate] = useState(comment.updatedAt);

  const showConfirmDeletionModal = () => {
    setdisplayConfirmDeletion(true);
  };
  const hideConfirmDeletionModal = () => {
    setdisplayConfirmDeletion(false);
  };
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setDisableSaveButton(true);
    } else if (disableSaveButton) setDisableSaveButton(false);
    setCommentText(event.target.value);
  };

  const OnDelete = (id: number): void => {
    deleteCommentAction(id);
    hideConfirmDeletionModal();
  };
  const OnEdit = (): void => {
    const commentTextValue =
      props.state.comment && props.state.comment.id === comment.id ? props.state.comment.value : comment.value;
    if (commentText !== commentTextValue) {
      const updatedComment: CommentCreationAttributes = {
        commentableType: commentableType,
        commentableId: commentableId,
        value: commentText,
      };
      editComment(comment.id, updatedComment);
    }
    setEditableComment(false);
  };

  const onCancel = (): void => {
    const commentTextValue =
      props.state.comment && props.state.comment.id === comment.id ? props.state.comment.value : comment.value;
    setCommentText(commentTextValue);
    setEditableComment(false);
    if (disableSaveButton) setDisableSaveButton(false);
  };

  const createdDateValue = new Date(comment.createdAt);
  const updatedDateValue =
    props.state.comment && props.state.comment.id === comment.id
      ? new Date(props.state.comment.updatedAt)
      : new Date(comment.updatedAt);

  const differentMilisecondsBetweenDates = Math.abs(createdDateValue.getTime() - updatedDateValue.getTime());
  const edited = differentMilisecondsBetweenDates <= 10 ? null : 'Edited';
  const createdDate = moment(comment.createdAt).fromNow();
  const updatedDate =
    props.state.comment && props.state.comment.id === comment.id
      ? moment(props.state.comment.updatedAt).fromNow()
      : moment(comment.updatedAt).fromNow();

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
  const userName = currentUser ? (currentUser.name ? currentUser.name : currentUser.email) : `Incognito user`;

  return (
    <li className={styles.commentRoot}>
      <div className={styles.commentWrapper} ref={commentRef}>
        {displayConfirmDeletion ? (
          <ConfirmModalWindow
            onApprove={OnDelete}
            onCancel={hideConfirmDeletionModal}
            question={`${userName}, do you want to delete this comment?`}
            id={comment.id}
          />
        ) : null}
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
            {!editableComment ? (
              <>
                {isAuthor ? (
                  <Tooltip title={'Edit'} placement="left-start" arrow>
                    <EditIcon className={styles.commentIcons} onClick={() => setEditableComment(true)} />
                  </Tooltip>
                ) : null}
                {isAuthor || currentUser?.isAdmin ? (
                  <Tooltip title={'Delete'} placement="right-start" arrow>
                    <DeleteIcon className={styles.commentIcons} onClick={showConfirmDeletionModal} />
                  </Tooltip>
                ) : null}
              </>
            ) : null}
          </div>
        </div>

        {editableComment ? (
          <InputForm value={commentText} onChange={handleCommentChange} multiline />
        ) : (
          <p className={styles.commentBody}>{commentText}</p>
        )}
        <div className={styles.commentFooter}>
          {!editableComment ? (
            <>
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
                    <ThumbDownRoundedIcon
                      className={styles.iconLike}
                      onClick={() => disLikeCommentAction(comment.id)}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title={'Useless'} placement="right-start" arrow>
                    <ThumbDownOutlinedIcon
                      className={styles.iconLike}
                      onClick={() => disLikeCommentAction(comment.id)}
                    />
                  </Tooltip>
                )}
                <span key={`${comment.id}-dislikes`}>{countDisLikes}</span>
              </div>
            </>
          ) : (
            <div className={styles.buttonsContainer}>
              <div className={styles.buttonWrapper}>
                <Button buttonType={ButtonType.primary} onClick={OnEdit} disabled={disableSaveButton ? true : false}>
                  Save
                </Button>
              </div>
              <div className={styles.buttonWrapper}>
                <Button buttonType={ButtonType.secondary} className={styles.buttonOk} onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
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
