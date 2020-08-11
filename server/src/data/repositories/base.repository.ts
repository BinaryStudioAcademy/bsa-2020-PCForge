import { BuildOptions, FindOptions, Model } from 'sequelize/types';
import { FilterDefaults, IFilter } from './repositoriesFilterInterfaces';

export type RichModel = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Model;
};

export interface IMeta {
  globalCount: number;
}

export interface IWithMeta<M extends Model> {
  meta: IMeta;
  data: M[];
}

export abstract class BaseRepository<M extends Model> {
  constructor(private _model: RichModel) {}

  async getAll(filter?: IFilter, params?: FindOptions): Promise<IWithMeta<M>> {
    let result = [];
    const { from: offset, count: limit } = { ...FilterDefaults, ...filter };
    if (params) {
      result = await this._model.findAll({
        order: [['id', 'ASC']],
        offset: offset,
        limit: limit,
        ...params,
      });
    } else {
      result = await this._model.findAll();
    }
    const globalCount = await this._model.count();
    return {
      meta: { globalCount },
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
