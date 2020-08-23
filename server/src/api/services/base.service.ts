import { BuildOptions, FindOptions, ForeignKeyConstraintError, Model } from 'sequelize';
import { BaseRepository } from '../../data/repositories/base.repository';
import { triggerServerError } from '../../helpers/global.helper';

export type RichModel = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Model;
};

export abstract class BaseService<M extends Model, R extends BaseRepository<M>> {
  constructor(private _repository: R) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  public async create(data: object): Promise<M> {
    try {
      const res = await this._repository.create(data);
      return res;
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) triggerServerError(err.message, 404);
    }
  }
}
