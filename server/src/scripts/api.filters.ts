export type FilterByIdType = string | string[] | Record<string, unknown>;
export type FilterByNumberType = number | number[] | Record<string, unknown>;
export type FilterRangeType<T> = {
  minValue: T;
  maxValue: T;
};
export interface IFilter {
  from: number;
  count: number;
}
export interface ICommentFilter extends IFilter {
  commentableType: FilterByIdType;
  commentableId: FilterByIdType;
}
export interface ICpuFilter extends IFilter {
  socket: ISocketFilter;
}
export interface IGameFilter extends IFilter {
  year: FilterByNumberType;
}
export interface IMotherboardFilter extends IFilter {
  socket: ISocketFilter;
  ramType: IRamTypeFilter;
}
export interface IRamFilter extends IFilter {
  type: IRamTypeFilter;
  memorySize: FilterRangeType<number>;
}
export interface IRamTypeFilter extends IFilter {
  id: FilterByIdType;
}
export interface IRateFilter extends IFilter {
  ratebleType: FilterByIdType;
  ratebleId: FilterByIdType;
}
export interface ISocketFilter extends IFilter {
  id: FilterByIdType;
}
