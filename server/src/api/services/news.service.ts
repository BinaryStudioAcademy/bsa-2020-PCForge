import { NewsCreationAttributes, NewsModel } from '../../data/models/news';
import { NewsRepository } from '../../data/repositories/news.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IWithMeta } from '../../data/repositories/base.repository';
import { elasticServices } from './elsticsearch.service';
import { INewsFilter } from '../../data/repositories/filters/news.filter';

const elastic = elasticServices.news;

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

  async getAllNews(filter: INewsFilter): Promise<IWithMeta<NewsModel>> {
    console.log('NewsService -> filter.name', filter);
    if (filter.name) {
      const ids = await elastic.searchIDs({
        input: filter.name,
        searchFields: ['title', 'content'],
      });
      filter.id = ids.length ? ids : [-1];
    }

    const news = await this.repository.getAllNews(filter);
    return news;
  }

  async createNews(inputNews: NewsCreationAttributes): Promise<NewsModel> {
    const news = await super.create(inputNews);
    await elastic.addData(news);
    return news;
  }

  async updateNewsById({ id, data }: { id: string; data: NewsCreationAttributes }): Promise<NewsModel> {
    const news = await super.updateById(id, data);
    await elastic.updateData(news);
    return news;
  }

  async deleteNewsById(id: string): Promise<NewsModel> {
    const news = await super.deleteById(id);
    elastic.delete(id);
    return news;
  }
}
