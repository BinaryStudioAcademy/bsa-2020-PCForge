import { NewsCreationAttributes, NewsModel, NewsStatic } from '../models/news';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { IFilter } from './filters/base.filter';
import { INewsFilter } from './filters/news.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';

export class NewsRepository extends BaseRepository<NewsModel, NewsCreationAttributes, IFilter> {
  constructor(private model: NewsStatic) {
    super(<RichModel>model, IFilter);
  }

  async getNewsById(id: string): Promise<NewsModel> {
    const news = await this.getById(id);
    return news;
  }

  async getAllNews(inputFilter: INewsFilter): Promise<IWithMeta<NewsModel>> {
    const filter = mergeFilters<INewsFilter>(new INewsFilter(), inputFilter);
    const news = await this.getAll(
      {
        where: {
          id: { [Op.and]: { [Op.or]: filter.id } },
        },
      },
      filter
    );
    return news;
  }

  async createNews(inputNews: NewsCreationAttributes): Promise<NewsModel> {
    const news = await this.model.create(inputNews);
    return news;
  }

  async updateNewsById(id: string, inputNews: NewsCreationAttributes): Promise<NewsModel> {
    const news = await this.updateById(id, inputNews);
    return news;
  }

  async deleteNewsById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
