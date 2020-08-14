class IFilter {
  constructor() {
    // do nothing
  }
  from = 0;
  count = 50;
}
class ICommentFilter extends IFilter {
  constructor() {
    super();
  }
  commentableType: FilterByIdType = notNull;
  commentableId: FilterByIdType = notNull;
}
class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socket: ISocketFilter = new ISocketFilter();
}
class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  year: FilterByNumberType = notNull;
}
class IMotherboardFilter extends IFilter {
  constructor() {
    super();
  }
  socket: ISocketFilter = new ISocketFilter();
  ramType: IRamTypeFilter = new IRamTypeFilter();
}
class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  type: IRamTypeFilter = new IRamTypeFilter();
  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
}
class IRamTypeFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByIdType = notNull;
}
class IRateFilter extends IFilter {
  constructor() {
    super();
  }
  ratebleType: FilterByIdType = notNull;
  ratebleId: FilterByIdType = notNull;
}
class ISocketFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByIdType = notNull;
}
type FilterByIdType = string | string[] | Record<string, unknown>;
type FilterByNumberType = number | number[] | Record<string, unknown>;
type FilterRangeType<T> = {
  minValue: T;
  maxValue: T;
};
