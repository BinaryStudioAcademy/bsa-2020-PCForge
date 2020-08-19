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
