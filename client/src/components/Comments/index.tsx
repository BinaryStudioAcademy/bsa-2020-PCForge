import React, { useState, ChangeEvent } from 'react';
import { Comment } from 'common/models/comment';
import Input from 'components/BasicComponents/Input';
import CommentComponent from 'components/Comments/Comment';
import styles from 'components/Comments/styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Paginator from 'components/Paginator';

interface Props {
  comments: Comment[];
  commentsPerPage: number;
  commentsTotal: number;
  rootClassName?: string;
  buttonClassName?: string;
  onCreateComment: (value: string) => void;
  onPaginationToggle: (meta: { from: number; count: number }) => void;
}

const Comments: React.FC<Props> = (props): JSX.Element => {
  const { comments, buttonClassName = '' } = props;
  const [value, setValue] = useState('');

  const onCreateComment = () => {
    props.onCreateComment(value);
    setValue('');
  };

  return (
    <div className={[styles.commentsRoot, props.rootClassName].join(' ')}>
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
            className={[styles.addCommentButton, buttonClassName].join(' ')}
            title="Write a review"
            size="large"
            onClick={onCreateComment}
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
      <Paginator
        countComponents={props.commentsTotal}
        countComponentsOnPage={props.commentsPerPage}
        setPagination={props.onPaginationToggle}
      />
    </div>
  );
};

Comments.defaultProps = {
  rootClassName: '',
};

export default Comments;
