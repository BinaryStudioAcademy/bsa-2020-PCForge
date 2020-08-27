export interface Ssd {
  id: number;
  name: string;
  capacity: number;
  size: number;
  sata: number;
  m2: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SsdCreationAttributes {
  name: string;
  capacity: number;
  size: number;
  sata: number;
  m2: boolean;
}
