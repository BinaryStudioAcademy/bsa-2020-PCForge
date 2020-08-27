export interface TypeHdd {
  id: number;
  name: string;
  capacity: number;
  size: number;
  sata: number;
  rpm: number;
  ram: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface HddCreationAttributes {
  name: string;
  capacity: number;
  size: number;
  sata: number;
  rpm: number;
  ram: number;
}
