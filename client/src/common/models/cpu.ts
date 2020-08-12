export interface Cpu {
  id: number;
  name: string;
  performance: number;
  clockspeed: number;
  tdp: number;
  cores: number;
  class: string;
  createdAt: Date;
  updatedAt: Date;
}