export interface IFilter {
  from: number;
  count: number;
}

export interface ICpuFilter extends IFilter {
  socketId: string | null;
}

export interface IRamFilter extends IFilter {
  typeId: string | null;
}

export interface IMotherboardFilter extends IFilter {
  ramTypeId: string | null;
  socketId: string | null;
}
