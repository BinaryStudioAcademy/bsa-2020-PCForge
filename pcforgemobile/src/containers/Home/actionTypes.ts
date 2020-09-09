import { News } from 'common/models/news.model';
import { IWithMeta } from 'common/interfaces/global';

export const GET_NEWS = 'HOME_GET_NEWS';
export const GET_NEWS_SUCCESS = 'HOME_GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

export type getNewsAction = {
    type: typeof GET_NEWS;
}

export type getNewsSuccessAction = {
    type: typeof GET_NEWS_SUCCESS;
    payload: IWithMeta<News>;
}

export type getNewsFailureAction = {
    type: typeof GET_NEWS_FAILURE;
    payload: {
        message: string;
    }
}

export type HomeActionTyeps = 
    | getNewsAction
    | getNewsSuccessAction
    | getNewsFailureAction
