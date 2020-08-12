import React from 'react';
import { SetupComment } from 'common/models/comment';
import Input from 'components/BasicComponents/Input';
import CommentComponent from '../Comment';
import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import RatingBox from 'components/RatingBox';

interface Props {
  comments: SetupComment[];
}

const SetupPageComments: React.FC<Props> = (props): JSX.Element => {
  const { comments } = props;
  return (
    <div className={styles.commentsRoot}>
      <h2 className={styles.reviewHeader}>Users reviews</h2>
      <ul className={styles.commentsList}>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </ul>
      <div className={styles.userReviewRoot}>
        <Input
          multiline
          rows={6}
          placeholder="Write here your review..."
          variant={'standard'}
          inputProps={{ className: styles.userReviewInput }}
        />
        <div className={styles.userReviewBlock}>
          <RatingBox name="rating" disabled={false} ratingValue={1} />
          <Button
            buttonType={ButtonType.primary}
            className={styles.addCommentButton}
            title="Write a review"
            size="large"
          >
            Add review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetupPageComments;
