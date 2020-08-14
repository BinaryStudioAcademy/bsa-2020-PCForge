import { Op } from 'sequelize';

export const notNull = { [Op.ne]: null };
export type FilterByIdType = string | string[] | Record<string, unknown>;
export type FilterByNameType = string | null | Record<string, unknown>;
