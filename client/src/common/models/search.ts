import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';
import { TypeHdd } from './hdd';
import { Ssd } from './ssd';
import { Game } from './game';
import { TypeNews } from './typeNews';
import { Setup } from './setup';

export type SearchResponse = {
  _index: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _source: any;
};
