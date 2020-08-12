import React from 'react';
import { SetupComment } from 'common/models/comment';
import styles from './styles.module.scss';
import RatingBox from 'components/RatingBox';

interface Props {
  comment: SetupComment;
}

const CommentComponent: React.FC<Props> = (props): JSX.Element => {
  const { comment } = props;
  return (
    <li className={styles.commentRoot}>
      <div className={styles.commentWrapper}>
        <div className={styles.commentMeta}>
          <span className={styles.commentAuthor}>{comment.author}</span>
        </div>
        <p className={styles.commentBody}>{comment.body}</p>
        <div className={styles.ratingBoxWrapper}>
          <RatingBox name="rating" disabled ratingValue={comment.rating} />
        </div>
      </div>
    </li>
  );
};

export default CommentComponent;
