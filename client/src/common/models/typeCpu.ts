export type TypeCpu = {
  id: number;
  name: string;
  performance: number;
  clockspeed: number;
  tdp: number;
  cores: number;
  class: string;
  createdAt: Date;
  updatedAt: Date;
  socketId: number;
  socket: {
    id: number;
    name: string;
  };
};
