import React, { ChangeEvent } from 'react';
import { Comment } from 'common/models/comment';
import Input from 'components/BasicComponents/Input';
import CommentComponent from 'components/Comments/Comment';
import styles from 'components/Comments/styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Paginator from 'components/Paginator';
import CommentableType from 'common/enums/CommentableItems';

interface IMyComponentProps {
  comments: Comment[];
  commentsPerPage: number;
  commentsTotal: number;
  rootClassName?: string;
  buttonClassName?: string;
  onCreateComment: (value: string) => void;
  onDeleteComment: (id: number) => void;
  onPaginationToggle: (meta: { from: number; count: number }) => void;
  commentRef?: React.RefObject<HTMLDivElement>;
  commentId?: number;
  commentPaginationPage?: number;
  commentableId: number;
  commentableType: CommentableType;
}

interface IMyComponentState {
  commentsList: Comment[];
  value: string;
  rootClassName: string;
}

class Comments extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = {
      value: '',
      rootClassName: '',
      commentsList: props.comments,
    };
  }

  public onDeleteCommentHandle(id: number): void {
    this.props.onDeleteComment(id);
  }

  public onCreateCommentHandle = () => {
    this.props.onCreateComment(this.state.value);
    this.setState({ value: '' });
  };

  public render(): JSX.Element {
    if (this.state.commentsList.length != this.props.comments.length) {
      this.setState({ commentsList: this.props.comments });
    }

    return (
      <div className={[styles.commentsRoot, this.props.rootClassName].join(' ')}>
        <h2 className={styles.reviewHeader}>Users reviews</h2>
        <div className={styles.userReviewRoot}>
          <Input
            multiline
            rows={3}
            placeholder="Write here your review..."
            variant="standard"
            value={this.state.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ value: e.target.value })}
            inputProps={{ className: styles.userReviewInput }}
          />
          <div className={styles.userReviewBlock}>
            <Button
              buttonType={ButtonType.primary}
              className={[styles.addCommentButton, this.props.buttonClassName].join(' ')}
              title="Write a review"
              size="large"
              onClick={this.onCreateCommentHandle}
            >
              Add review
            </Button>
          </div>
        </div>
        <ul className={styles.commentsList}>
          {this.state.commentsList.map((comment) => {
            if (comment.id === this.props.commentId && this.props.commentRef)
              return (
                <CommentComponent
                  key={comment.id}
                  comment={comment}
                  deleteCommentAction={this.props.onDeleteComment}
                  commentRef={this.props.commentRef}
                  highlight={true}
                  commentableId={this.props.commentableId}
                  commentableType={this.props.commentableType}
                />
              );
            else
              return (
                <CommentComponent
                  key={comment.id}
                  comment={comment}
                  deleteCommentAction={this.props.onDeleteComment}
                  commentableId={this.props.commentableId}
                  commentableType={this.props.commentableType}
                />
              );
          })}
        </ul>
        <Paginator
          countComponents={this.props.commentsTotal}
          countComponentsOnPage={this.props.commentsPerPage}
          setPagination={this.props.onPaginationToggle}
          commentPage={this.props.commentPaginationPage}
        />
      </div>
    );
  }
}

export default Comments;
