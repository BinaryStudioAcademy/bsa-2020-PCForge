export type TypeMotherboard = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  socketId: number;
  ramTypeId: number;
  sata: number;
  m2: boolean;
  ramType: {
    id: number;
    name: string;
  };
  socket: {
    id: number;
    name: string;
  };
};
