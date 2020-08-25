/* eslint-disable @typescript-eslint/ban-types */
import { BuildOptions, DatabaseError, ForeignKeyConstraintError, Model } from 'sequelize';
import { BaseRepository } from '../../data/repositories/base.repository';
import { triggerServerError } from '../../helpers/global.helper';

export type RichModel = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Model;
};

export abstract class BaseService<M extends Model, C extends object, R extends BaseRepository<M, C>> {
  constructor(private _repository: R) {}

  public async create(data: C): Promise<M | never> {
    try {
      const res = await this._repository.create(data);
      return res;
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) triggerServerError(err.message, 404);
    }
  }

  public async updateById(id: string, data: C): Promise<M | never> {
    const oldModel = await this._repository.getById(id);
    if (!oldModel) {
      triggerServerError(`${this._repository._model.name} with id: ${id} does not exists`, 404);
    }
    try {
      const newModel = await this._repository.updateById(id, data);
      return newModel;
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) triggerServerError(err.message, 404);
    }
  }

  public async deleteById(id: string): Promise<void | never> {
    const oldModel = await this._repository.getById(id);
    if (!oldModel) {
      triggerServerError(`${this._repository._model.name} with id: ${id} does not exists`, 404);
    }
    try {
      await this._repository.deleteById(id);
    } catch (err) {
      if (err instanceof DatabaseError) triggerServerError(err.message, 404);
    }
  }
}
