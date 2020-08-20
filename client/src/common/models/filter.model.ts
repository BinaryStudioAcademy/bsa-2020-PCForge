export type CommentFilter = {
  from?: number;
  count?: number;
  commentableType: 'game' | 'setup' | '';
  commentableId: number;
};

export type RateFilter = {
  ratebleType: 'game' | 'setup' | '';
  ratebleId: number;
};

export type FilterModel = {
  name?: string;
  from?: number;
  count?: number;
};
