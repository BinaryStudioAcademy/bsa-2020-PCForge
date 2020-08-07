import { BuildOptions, Model } from 'sequelize/types';

export type RichModel = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Model;
};

export abstract class BaseRepository<M extends Model> {
  constructor(private _model: RichModel) {}

  async getAll(): Promise<M[]> {
    const result = await this._model.findAll();
    return result as M[];
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
