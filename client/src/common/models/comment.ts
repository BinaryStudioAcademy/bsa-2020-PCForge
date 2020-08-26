import { User } from './user';

export interface Comment {
  id: number;
  authorId: number;
  author?: string;
  user?: User;
  createdAt: Date;
  value: string;
}

export interface CommentCreationAttributes {
  commentableType: 'setup' | 'game';
  commentableId: number;
  value: string;
}
