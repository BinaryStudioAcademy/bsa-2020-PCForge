import { TypeUser } from './typeUser';
import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Ssd } from './ssd';
import { TypeHdd } from './hdd';

export type TypeHarwareStatistic = {
  type: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'hdd';
  hardwareId: number;
  setupsCount: number;
  hardware: Cpu | Gpu | Ram | Ssd | TypeHdd;
};

export type TypeUserStatistic = {
  userId: number;
  setupsCount: number;
  user: TypeUser;
};
