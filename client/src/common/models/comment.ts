import { User } from './user';

export interface Comment {
  id: number;
  authorId: number;
  user: User;
  createdAt: Date;
  value: string;
}
