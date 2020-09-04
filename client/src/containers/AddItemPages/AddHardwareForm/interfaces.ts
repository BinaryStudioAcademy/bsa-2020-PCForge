import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';

export interface IinputOptions {
  value: string | number;
  title: string;
}

export const validationErrorEmptyFields = 'Error: Please fill all hardware components';
export const storage = 'Storage';
export const HardwareTypesValues = [
  { value: HardwareTypes.PowerSupply, title: HardwareTypes.PowerSupply },
  { value: HardwareTypes.Motherboard, title: HardwareTypes.Motherboard },
  { value: HardwareTypes.RAM, title: HardwareTypes.RAM },
  { value: HardwareTypes.CPU, title: HardwareTypes.CPU },
  { value: HardwareTypes.GPU, title: HardwareTypes.GPU },
  { value: storage, title: storage },
];

export const StorageTypesValues = [
  { value: HardwareTypes.SSD, title: HardwareTypes.SSD },
  { value: HardwareTypes.HDD, title: HardwareTypes.HDD },
];

export const memorySizeOptions = [
  { value: 2, title: '2' },
  { value: 4, title: '4' },
  { value: 8, title: '8' },
  { value: 16, title: '16' },
];
export const sataOptions = [
  { value: 1, title: '1' },
  { value: 2, title: '2' },
  { value: 3, title: '3' },
];
export const ramValueOptions = [
  { value: 0, title: '0' },
  { value: 2, title: '2' },
  { value: 4, title: '4' },
  { value: 8, title: '8' },
  { value: 16, title: '16' },
  { value: 32, title: '32' },
  { value: 64, title: '64' },
  { value: 128, title: '128' },
  { value: 256, title: '256' },
  { value: 512, title: '512' },
];
export const classCpuOptions = [
  {
    value: 'Laptop',
    title: 'Laptop',
  },
  {
    value: 'Desktop',
    title: 'Desktop',
  },
];
