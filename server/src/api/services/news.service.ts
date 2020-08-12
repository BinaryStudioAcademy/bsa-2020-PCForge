import { NewsDataAttributes, NewsModel } from '../../data/models/news';
import { NewsRepository } from '../../data/repositories/news.repository';

export class NewsService {
  constructor(private repository: NewsRepository) {}

  async getNewsById(id: string): Promise<NewsModel> {
    const news = await this.repository.getNewsById(id);
    return news;
  }

  async getAllNews(): Promise<NewsModel[]> {
    const news = await this.repository.getAllNews();
    return news;
  }

  async createNews(inputNews: NewsDataAttributes): Promise<NewsModel> {
    const news = await this.repository.createNews(inputNews);
    return news;
  }

  async updateNewsById(inputNews: { id: string; data: NewsDataAttributes }): Promise<NewsModel> {
    const { id, data } = inputNews;
    const oldNews = await this.repository.getNewsById(id);
    if (!oldNews) {
      throw new Error(`Socket with id: ${id} does not exists`);
    }
    const news = await this.repository.updateNewsById(id, data);
    return news;
  }

  async deleteNewsById(inputNews: { id: string }): Promise<void> {
    const { id } = inputNews;
    await this.repository.deleteNewsById(id);
  }
}
