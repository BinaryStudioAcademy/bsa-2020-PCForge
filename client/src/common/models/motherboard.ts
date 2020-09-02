export interface Motherboard {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MotherboardCreationAttributes {
  name: string;
  socketId: number;
  ramTypeId: number;
  sata: number;
  m2: boolean;
}
