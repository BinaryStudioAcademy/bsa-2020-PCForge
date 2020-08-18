import { User } from './user';

export interface SetupComment {
  id: number;
  authorId: number;
  user: User;
  createdAt: Date;
  value: string;
}
