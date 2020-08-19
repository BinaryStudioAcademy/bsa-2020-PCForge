export type CommentFilter = {
  from?: number;
  count?: number;
  commentableType: 'game' | 'setup' | '';
  commentableId: number;
};

export type FilterModel = {
  name?: string;
  from?: number;
  count?: number;
};
