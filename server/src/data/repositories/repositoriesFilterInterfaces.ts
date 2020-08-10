import { notNull } from './repositoriesTypes';

export interface IFilter {
  from: number;
  count: number;
}

export const FilterDefaults: IFilter = {
  from: 0,
  count: 1,
};

export interface ISocketFilter extends IFilter {
  socketId: string | Record<string, unknown>;
}

export const SocketFilterDefaults: ISocketFilter = {
  from: 0,
  count: 1,
  socketId: notNull,
};
