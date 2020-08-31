export type CommentFilter = {
  from?: number;
  count?: number;
  commentableType: 'game' | 'setup' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';
  commentableId: number;
};

export type RateFilter = {
  ratebleType: 'game' | 'setup' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';
  ratebleId: number;
};

export type FilterModel = {
  name?: string;
  from?: number;
  count?: number;
};
