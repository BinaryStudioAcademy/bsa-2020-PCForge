import { BuildOptions, FindOptions, Model } from 'sequelize/types';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export type RichModel = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Model;
};

export interface IMeta {
  globalCount: number;
  countAfterFiltering: number;
}

export interface IWithMeta<M extends Model> {
  meta: IMeta;
  data: M[];
}

export abstract class BaseRepository<M extends Model, F extends IFilter = IFilter> {
  constructor(private _model: RichModel, private filterFactory: new () => F) {}

  private async getCount(where?: Record<string, unknown>): Promise<number> {
    const count = await this._model.count({ where });
    return count;
  }

  async getAll(params?: FindOptions, filter?: F): Promise<IWithMeta<M>> {
    const { from: offset, count: limit } = filter || {};

    const result = await this._model.findAndCountAll({
      order: [['id', 'ASC']],
      offset: offset,
      limit: limit,
      ...params,
    });

    const globalCount = await this.getCount();
    // here is a bug in sequelize: it returns array instead of number, so we use length
    // https://github.com/sequelize/sequelize/issues/9109
    const countAfterFiltering = ((result.count as unknown) as Record<string, unknown>[]).length;

    return {
      meta: { globalCount, countAfterFiltering },
      data: result.rows as M[],
    };
  }

  async getById(id: string): Promise<M> {
    const result = await this._model.findByPk(id);
    return result as M;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async updateById(id: string, data: object): Promise<M> {
    const result = await this._model.update(data, {
      where: { id },
      returning: true,
    });

    const [, models] = result;

    return models[0] as M;
  }

  async deleteById(id: string): Promise<void> {
    await this._model.destroy({
      where: { id },
    });
  }
}
