import webApi from 'api/webApiHelper';
import { SetupComment } from 'common/models/comment';
import { CommentFilter } from 'common/models/filter.model';

export type TypeResponseAllComments = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: SetupComment[];
};

const endpoint = '/comments';

export const getAllComments = async (filter: CommentFilter): Promise<TypeResponseAllComments> => {
  return await webApi.get(endpoint, filter);
};
