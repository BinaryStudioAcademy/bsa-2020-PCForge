import { NewsCreationAttributes, NewsModel } from '../../data/models/news';
import { NewsRepository } from '../../data/repositories/news.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IWithMeta } from '../../data/repositories/base.repository';

export class NewsService extends BaseService<NewsModel, NewsCreationAttributes, NewsRepository> {
  constructor(private repository: NewsRepository) {
    super(repository);
  }

  async getNewsById(id: string): Promise<NewsModel> {
    const news = await this.repository.getNewsById(id);
    if (!news) {
      triggerServerError(`News with id: ${id} does not exists`, 404);
    }
    return news;
  }

  async getAllNews(): Promise<IWithMeta<NewsModel>> {
    const news = await this.repository.getAllNews();
    return news;
  }

  async createNews(inputNews: NewsCreationAttributes): Promise<NewsModel> {
    const news = await super.create(inputNews);
    return news;
  }

  async updateNewsById({ id, data }: { id: string; data: NewsCreationAttributes }): Promise<NewsModel> {
    const news = await super.updateById(id, data);
    return news;
  }

  async deleteNewsById(id: string): Promise<NewsModel> {
    return await super.deleteById(id);
  }
}
