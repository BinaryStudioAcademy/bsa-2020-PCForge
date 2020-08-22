import { NewsCreationAttributes, NewsModel } from '../../data/models/news';
import { NewsRepository } from '../../data/repositories/news.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class NewsService {
  constructor(private repository: NewsRepository) {}

  async getNewsById(id: string): Promise<NewsModel> {
    const news = await this.repository.getNewsById(id);
    if (!news) {
      triggerServerError(`News with id: ${id} does not exists`, 404);
    }
    return news;
  }

  async getAllNews(): Promise<NewsModel[]> {
    const news = await this.repository.getAllNews();
    return news;
  }

  async createNews(inputNews: NewsCreationAttributes): Promise<NewsModel> {
    const news = await this.repository.createNews(inputNews);
    return news;
  }

  async updateNewsById(inputNews: { id: string; data: NewsCreationAttributes }): Promise<NewsModel> {
    const { id, data } = inputNews;
    const oldNews = await this.repository.getNewsById(id);
    if (!oldNews) {
      triggerServerError(`News with id: ${id} does not exists`, 404);
    }
    const news = await this.repository.updateNewsById(id, data);
    return news;
  }

  async deleteNewsById(id: string): Promise<NewsModel> {
    const news = await this.repository.getNewsById(id);
    if (!news) {
      triggerServerError(`News with id: ${id} does not exists`, 404);
    }
    await this.repository.deleteNewsById(id);
    return news;
  }
}
