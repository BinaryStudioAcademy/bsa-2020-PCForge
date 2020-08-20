import React, { useState, ChangeEvent } from 'react';
import { Comment } from 'common/models/comment';
import Input from 'components/BasicComponents/Input';
import CommentComponent from 'components/Comments/Comment';
import styles from 'components/Comments/styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';

interface Props {
  comments: Comment[];
  onCreateComment: (value: string) => void;
}

const Comments: React.FC<Props> = (props): JSX.Element => {
  const { comments } = props;
  const [value, setValue] = useState('');
  return (
    <div className={styles.commentsRoot}>
      <h2 className={styles.reviewHeader}>Users reviews</h2>
      <div className={styles.userReviewRoot}>
        <Input
          multiline
          rows={3}
          placeholder="Write here your review..."
          variant="standard"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          inputProps={{ className: styles.userReviewInput }}
        />
        <div className={styles.userReviewBlock}>
          <Button
            buttonType={ButtonType.primary}
            className={styles.addCommentButton}
            title="Write a review"
            size="large"
            onClick={() => props.onCreateComment(value)}
          >
            Add review
          </Button>
        </div>
      </div>
      <ul className={styles.commentsList}>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
