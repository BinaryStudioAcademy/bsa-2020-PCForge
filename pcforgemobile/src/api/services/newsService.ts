import { News } from "common/models/news.model";
import { IWithMeta } from "common/interfaces/global";
import webApiHelper from "../webApi.helper";

export class NewsService {
    public async getMany(): Promise<IWithMeta<News>> {
        const endpoint: string = '/news';
        const data = await webApiHelper.get(endpoint);
        return data;
    }
}

const newsService = new NewsService;

export default newsService;
