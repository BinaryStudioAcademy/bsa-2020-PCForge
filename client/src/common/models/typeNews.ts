import { Comment } from './comment';

export type TypeNews = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Array<Comment>;
};

export type TypeAddNews = {
  title: string;
  content: string;
  image?: string;
};
