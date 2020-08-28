export interface BaseFilter {
  count?: number;
  from?: number;
}

export interface CommentFilter extends BaseFilter {
  commentableType: 'game' | 'setup' | '';
  commentableId: number;
};

export type RateFilter = {
  ratebleType: 'game' | 'setup' | '';
  ratebleId: number;
};

export interface CpuFilter extends BaseFilter {
  socketId?: string;
  socketIds?: string;
  clockspeed?: {
    minValue: number,
    maxValue: number,
  };
  name?: string;
}

export interface MotherboardFilter extends BaseFilter {
  ramTypeId?: string;
  ramTypeIds?: string;
  socketId?: string;
  socketIds?: string;
  name?: string;
  sata?: string;
  m2?: boolean;
}

export interface RamFilter extends BaseFilter {
  typeId?: string;
  typeIds?: string;
}

export interface FilterModel extends BaseFilter {
  name?: string;
};
