import { NewsCreationAttributes, NewsModel, NewsStatic } from '../models/news';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { IFilter } from './filters/base.filter';

export class NewsRepository extends BaseRepository<NewsModel, IFilter> {
  constructor(private model: NewsStatic) {
    super(<RichModel>model, IFilter);
  }

  async getNewsById(id: string): Promise<NewsModel> {
    const news = await this.getById(id);
    return news;
  }

  async getAllNews(): Promise<IWithMeta<NewsModel>> {
    const news = await this.getAll();
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
