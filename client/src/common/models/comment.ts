import { User } from './user';

export interface Comment {
  id: number;
  authorId: number;
  author?: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  value: string;

  countLikes: number;
  countDislikes: number;
  isLikedByCurrentUser?: boolean;
  isDislikedByCurrentUser?: boolean;
  itemRateByAuthorComment?: number;
}

export interface CommentCreationAttributes {
  commentableType: 'setup' | 'game' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';
  commentableId: number;
  value: string;
}
