import webApi from 'api/webApiHelper';
import { CommentRateCreationAttributes, CommentRate } from 'common/models/commentRate';

export type TypeResponceAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: CommentRate[];
};

export interface ICommentLikeFilter {
  commentId: number;
  isLiked: boolean;
}

const endpoint = '/commentsRates';

export const getAllCommentLikes = async (filter: ICommentLikeFilter): Promise<CommentRate> => {
  return await webApi.get(endpoint, filter);
};

export const postCommentLike = async (request: CommentRateCreationAttributes): Promise<CommentRate> => {
  return await webApi.post(endpoint, request);
};
