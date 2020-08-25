export interface PowerSupply {
  id: number;
  name: string;
  power: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PowerSupplyCreationAttributes {
  name: string;
  power: number;
}
