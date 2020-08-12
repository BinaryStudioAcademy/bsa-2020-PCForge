import { NewsCreationAttributes, NewsModel, NewsStatic } from '../models/news';
import { BaseRepository, RichModel } from './base.repository';

export class NewsRepository extends BaseRepository<NewsModel> {
  constructor(private model: NewsStatic) {
    super(<RichModel>model);
  }

  async getNewsById(id: string): Promise<NewsModel> {
    const news = await this.getById(id);
    return news;
  }

  async getAllNews(): Promise<NewsModel[]> {
    const news = await this.getAll();
    return news.data;
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
