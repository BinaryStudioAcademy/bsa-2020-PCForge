export interface IFilter {
  from: number;
  count: number;
}

export interface ISocketFilter extends IFilter {
  socketId?: string;
}
