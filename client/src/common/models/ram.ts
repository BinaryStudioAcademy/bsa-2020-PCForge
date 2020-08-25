export interface Ram {
  id: number;
  name: string;
  memorySize: number;
  frequency: number;
  power: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RamCreationAttributes {
  name: string;
  memorySize: number;
  frequency: number;
  power: number;
  typeId: number;
}
