import { BuildOptions, FindOptions, Model } from 'sequelize/types';
import { reduceTo } from '../../helpers/filter.helper';
import { IFilter } from './filters/base.filter';

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

  async getAll(filter?: F, params?: FindOptions): Promise<IWithMeta<M>> {
    const { from: offset, count: limit, ...uniqueFilters } = reduceTo<F>(filter, this.filterFactory);

    const result = await this._model.findAll({
      order: [['id', 'ASC']],
      where: uniqueFilters,
      offset: offset,
      limit: limit,
      ...params,
    });

    const globalCount = await this.getCount();
    const countAfterFiltering = await this.getCount({ ...uniqueFilters });

    return {
      meta: { globalCount, countAfterFiltering },
      data: result as M[],
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
