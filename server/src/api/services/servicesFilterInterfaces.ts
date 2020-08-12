export interface IFilter {
  from: number;
  count: number;
}

export interface ICpuFilter extends IFilter {
  socketId: string;
}

export interface IRamFilter extends IFilter {
  typeId: string;
}

export interface IMotherboardFilter extends IFilter {
  ramTypeId: string;
  socketId: string;
}

export interface IGameFilter extends IFilter {
  year: number;
}
