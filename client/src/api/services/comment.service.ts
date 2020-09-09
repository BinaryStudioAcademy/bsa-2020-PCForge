import webApi from 'api/webApiHelper';
import { Comment, CommentCreationAttributes } from 'common/models/comment';
import { CommentFilter } from 'common/models/filter.model';

export type TypeResponseAllComments = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Comment[];
};

const endpoint = '/comments';

export const getAllComments = async (filter: CommentFilter): Promise<TypeResponseAllComments> => {
  return await webApi.get(endpoint, filter);
};

export const createComment = async (data: CommentCreationAttributes): Promise<Comment> => {
  const comment: Comment = await webApi.post(endpoint, data);
  return comment;
};

export const deleteComment = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const editComment = async (idComment: number, data: CommentCreationAttributes): Promise<Comment> => {
  const comment: Comment = await webApi.put(`${endpoint}/${idComment}`, data);
  return comment;
};
