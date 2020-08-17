import { Op } from 'sequelize';

export const notNull = { [Op.ne]: null };
export type FilterByIdType = string | string[] | Record<string, unknown>;
export type FilterByNameType = string | null | Record<string, unknown>;
export type FilterByNumberType = number | number[] | Record<string, unknown>;
export type FilterRangeType<T> = {
  minValue: T;
  maxValue: T;
};
