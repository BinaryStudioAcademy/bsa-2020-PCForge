import { Op } from 'sequelize';

export const notNull = { [Op.ne]: null };
export type FilterByIdType = string | string[] | Record<string, unknown>;
