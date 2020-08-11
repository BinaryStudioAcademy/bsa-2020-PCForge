export interface IFilter {
  from?: number;
  count?: number;
}

export interface ICpuFilter extends IFilter {
  socketId?: number;
}

export interface IRamFilter extends IFilter {
  typeId?: number;
}

export interface IMotherboardFilter extends IFilter {
  ramTypeId?: number;
  socketId?: number;
}
