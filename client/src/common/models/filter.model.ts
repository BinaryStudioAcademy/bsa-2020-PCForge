export type CommentFilter = {
  from?: number;
  count?: number;
  commentableType: 'game' | 'setup' | '';
  commentableId: number;
};
