import React from 'react';
import { Comment } from 'common/models/comment';
import styles from './styles.module.scss';

interface Props {
  comment: Comment;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const { comment } = props;
  return (
    <li className={styles.commentRoot}>
      <div className={styles.commentWrapper}>
        <div className={styles.commentMeta}>
          <span className={styles.commentAuthor}>{comment.user.name || comment.user.email}</span>
        </div>
        <p className={styles.commentBody}>{comment.value}</p>
      </div>
    </li>
  );
};

export default CommentComponent;
