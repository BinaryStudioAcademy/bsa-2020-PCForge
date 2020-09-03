import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import Tooltip from '@material-ui/core/Tooltip';

import { Comment } from 'common/models/comment';

import UserAvatar from 'components/UserAvatar';
import RatingBox from 'components/RatingBox';

import styles from './styles.module.scss';

interface Props {
  comment: Comment;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const { comment } = props;
  const createdDate = new Date(comment.createdAt);
  const updatedDate = new Date(comment.updatedAt);

  const differentMilisecondsBetweenDates = Math.abs(createdDate.getTime() - updatedDate.getTime());
  const edited = differentMilisecondsBetweenDates <= 10 ? null : 'Edited';
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
            <Tooltip title={'Edit'} placement="left-start" arrow>
              <EditIcon fontSize="small" className={styles.commentIcons} onClick={() => alert('edit!')} />
            </Tooltip>
            <Tooltip title={'Delete'} placement="right-start" arrow>
              <DeleteIcon fontSize="small" className={styles.commentIcons} onClick={() => alert('delete!')} />
            </Tooltip>
          </div>
        </div>
        <div className={styles.commentDateContainer}>
          <div className={styles.commentDate}>{`Created on ${createdDate.toUTCString()}`}</div>
          <div className={styles.commentDate}>{edited}</div>
        </div>
        <p className={styles.commentBody}>{comment.value}</p>
        <div className={styles.commentFooter}>
          <div className={styles.likeContainer}>
            <span>{comment.countLikes}</span>
            {comment.isLikedByCurrentUser ? (
              <Tooltip title={'Not useful anymore'} placement="left-start" arrow>
                <ThumbUpAltRoundedIcon className={styles.iconLike} />
              </Tooltip>
            ) : (
              <Tooltip title={'Useful'} placement="left-start" arrow>
                <ThumbUpAltOutlinedIcon className={styles.iconLike} onClick={() => alert('like!')} />
              </Tooltip>
            )}
          </div>
          <div className={styles.likeContainer}>
            {comment.isDislikedByCurrentUser ? (
              <Tooltip title={'No longer useless'} placement="right-start" arrow>
                <ThumbDownRoundedIcon className={styles.iconLike} />
              </Tooltip>
            ) : (
              <Tooltip title={'Useless'} placement="right-start" arrow>
                <ThumbDownOutlinedIcon className={styles.iconLike} onClick={() => alert('Dislike!')} />
              </Tooltip>
            )}
            <span>{comment.countDislikes}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentComponent;
