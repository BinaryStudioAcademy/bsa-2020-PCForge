export interface BaseFilter {
  count?: number;
  from?: number;
}

export interface CommentFilter {
  from?: number;
  count?: number;
  commentableId?: number;
  commentableType: 'setup' | 'game' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd' | 'news';
}

export type RateFilter = {
  ratebleType: 'game' | 'setup' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';
  ratebleId: number;
};

export interface CpuFilter extends BaseFilter {
  socketId?: string;
  socketIds?: string;
  'clockspeed[maxValue]'?: number;
  'clockspeed[minValue]'?: number;
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
  name?: string;
  'memorySize[minValue]'?: number;
  'memorySize[maxValue]'?: number;
  typeId?: string;
  typeIds?: string;
}

export interface FilterModel extends BaseFilter {
  name?: string;
}
