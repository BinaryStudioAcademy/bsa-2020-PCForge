import { TypeSocket } from './socket.model';

export interface Cpu {
  id: number;
  name: string;
  performance: number;
  clockspeed: number;
  tdp: number;
  cores: number;
  socket?: TypeSocket;
  class: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CpuCreationAttributes {
  name: string;
  performance: number;
  clockspeed: number;
  tdp: number;
  cores: number;
  class: string;
  socketId: number;
}