export type TypeRam = {
  id: number;
  name: string;
  memorySize: number;
  frequency: number;
  power: number;
  createdAt: Date;
  updatedAt: Date;
  typeId: number;
  ramType: {
    id: number;
    name: string;
  };
};
