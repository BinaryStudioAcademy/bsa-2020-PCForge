import { HomeActionTyeps } from './actionTypes';
import { UserLoginAttributes, User } from 'common/models/user.model';
import { RouterItemProps } from 'common/configs/routing';
import { News } from 'common/models/news.model';

export interface IHomeProps extends RouterItemProps {
  state: HomeState;
  getNewsRequest: () => HomeActionTyeps;
}

export interface HomeState {
  news: News[];
  itemsCount: number;
}
