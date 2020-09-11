export interface CommentRate {
  id: number;
  commentId: number;
  userId: number;
  isLiked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentRateCreationAttributes {
  commentId: number;
  //userId: number;
  isLiked: boolean;
}
