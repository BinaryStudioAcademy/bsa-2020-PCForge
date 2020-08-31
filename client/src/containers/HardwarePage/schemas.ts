import { HardwareSchema } from 'components/HardwareView';

export const ramSchema: HardwareSchema = {
  name: { as: 'Name' },
  memorySize: { as: 'Memory', postfix: ' GB' },
  frequency: { as: 'Frequency', postfix: ' MHz' },
  power: { as: 'Power' },
  type: {
    embedded: {
      name: { as: 'RAM Type', key: 'ramName' },
    },
  },
};

export const cpuSchema: HardwareSchema = {
  name: { as: 'Name' },
  cores: { as: 'Cores' },
  clockspeed: { as: 'ClockSpeed', postfix: ' MHz' },
  class: { as: 'Class' },
  tdp: { as: 'Thermal design power' },
  socket: {
    embedded: {
      name: { as: 'Socket Name', key: 'socketName' },
    },
  },
};

export const gpuSchema: HardwareSchema = {
  name: { as: 'Name' },
  interface: { as: 'Interface' },
  memorySize: { as: 'Memory', postfix: ' GB' },
  opengl: { as: 'OpenGL' },
  tdp: { as: 'Thermal design power' },
};

export const motherboardSchema: HardwareSchema = {
  name: { as: 'Name' },
  socket: {
    embedded: {
      name: { as: 'Socket Name', key: 'socketName' },
    },
  },
  ramType: {
    embedded: {
      name: { as: 'RAM Type', key: 'RAM Type' },
    },
  },
  sata: {
    as: 'Sata',
  },
  m2: {
    as: 'M2',
  },
};

export const powerSupplySchema: HardwareSchema = {
  name: { as: 'Name' },
  power: { as: 'Power' },
};
