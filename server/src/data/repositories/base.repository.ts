import { BuildOptions, FindOptions, Model } from 'sequelize/types';
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

// eslint-disable-next-line @typescript-eslint/ban-types
export abstract class BaseRepository<M extends Model, C extends object, F extends IFilter = IFilter> {
  constructor(public _model: RichModel, private filterFactory: new () => F) {}

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

  async getById(id: string | number): Promise<M> {
    const result = await this._model.findByPk(id);
    return result as M;
  }

  async get(where: Record<string, unknown>): Promise<M> {
    const result = await this._model.findOne({ where });
    return result as M;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async updateById(id: string | number, data: C): Promise<M> {
    const result = await this._model.update(data, {
      where: { id },
      returning: true,
    });

    const [, models] = result;

    return models[0] as M;
  }

  async deleteById(id: string | number): Promise<void> {
    await this._model.destroy({
      where: { id },
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async create(data: C): Promise<M> {
    const model = await this._model.create(data);
    return (model as unknown) as M;
  }
}
