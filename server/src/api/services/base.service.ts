/* eslint-disable @typescript-eslint/ban-types */
import { BuildOptions, ForeignKeyConstraintError, Model } from 'sequelize';
import { BaseRepository } from '../../data/repositories/base.repository';
import { triggerServerError } from '../../helpers/global.helper';

export type RichModel = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Model;
};

export abstract class BaseService<M extends Model, R extends BaseRepository<M>> {
  constructor(private _repository: R) {}

  public async create(data: object): Promise<M | never> {
    try {
      const res = await this._repository.create(data);
      return res;
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) triggerServerError(err.message, 404);
    }
  }

  public async updateById(id: string, data: object): Promise<M | never> {
    const oldModel = await this._repository.getById(id);
    if (!oldModel) {
      triggerServerError(`with id: ${id} does not exists`, 404);
    }
    try {
      const newModel = await this._repository.updateById(id, data);
      return newModel;
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) triggerServerError(err.message, 404);
    }
  }
}
