import { Op } from 'sequelize';

export const notNull = { [Op.ne]: null };
