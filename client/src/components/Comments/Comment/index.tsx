import React from 'react';
import { Comment } from 'common/models/comment';
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
  commentRef?: React.RefObject<HTMLDivElement>;
  highlight?: boolean;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const materialStyles = useStyles();
  const { comment, commentRef, highlight } = props;
  return (
    <li className={styles.commentRoot}>
      <div className={styles.commentWrapper} ref={commentRef}>
        <div className={styles.commentMeta}>
          <span className={styles.commentAuthor}>{comment.user!.name || comment.user!.email}</span>
          {highlight && <NewReleasesIcon classes={{ root: materialStyles.icon }} />}
        </div>
        <p className={styles.commentBody}>{comment.value}</p>
      </div>
    </li>
  );
};

export default CommentComponent;
