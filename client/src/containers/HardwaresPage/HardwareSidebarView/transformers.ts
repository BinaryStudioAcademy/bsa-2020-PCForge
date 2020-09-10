import { Cpu } from 'common/models/cpu';
import { ReactText } from 'react';
import { Gpu } from 'common/models/gpu';
import { transform } from 'lodash-es';
import { Ram } from 'common/models/ram';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { PowerSupply } from 'common/models/powerSupply';
import { TypeHdd } from 'common/models/typeHdd';
import { Ssd } from 'common/models/ssd';
import { hardwareTypes } from './actionTypes';

export function cpuTransformer(cpu: Cpu): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed.Name = cpu.name;
  transformed.Cores = cpu.cores + ' Cores';
  transformed['Clock Speed'] = cpu.clockspeed;
  transformed['Class'] = cpu.class;
  transformed['Thermal design power'] = cpu.tdp;
  transformed['Socket Name'] = cpu.socket?.name as string;
  return transformed;
}

export function gpuTransformer(gpu: Gpu): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed['Name'] = gpu.name;
  transformed['Interface'] = gpu.interface;
  transformed['Memory'] = gpu.memorySize + ' MB';
  transformed['OpenGL'] = gpu.opengl;
  transformed['Thermal design power'] = gpu.tdp;
  return transformed;
}

export function ramTransformer(ram: TypeRam): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed['Name'] = ram.name;
  transformed['Memory'] = ram.memorySize + ' MB';
  transformed['Frequency'] = ram.frequency + ' MHz';
  transformed['Power'] = ram.power;
  transformed['Ram Type'] = ram.ramType.name;

  return transformed;
}

export function motherboardTransformer(motherboard: TypeMotherboard): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed['Name'] = motherboard.name;
  transformed['Socket Name'] = motherboard.socket.name;
  transformed['RAM Type'] = motherboard.ramType.name;
  transformed['Sata'] = motherboard.sata;
  transformed['M2'] = motherboard.m2 ? '+' : '-';
  return transformed;
}

export function powerSupplyTransformer(powerSupply: PowerSupply): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed['Name'] = powerSupply.name;
  transformed['Power'] = powerSupply.power;
  return transformed;
}

export function hddTransformer(hdd: TypeHdd): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed['Name'] = hdd.name;
  transformed['Size'] = hdd.size;
  transformed['RPM'] = hdd.rpm;
  transformed['RAM'] = hdd.ram;
  transformed['Sata'] = hdd.sata;
  return transformed;
}

export function ssdTransformer(ssd: Ssd): Record<string, ReactText> {
  const transformed: Record<string, ReactText> = {};
  transformed['Name'] = ssd.name;
  transformed['Size'] = ssd.size;
  transformed['Sata'] = ssd.sata;
  transformed['M2'] = ssd.m2 ? '+' : '-';
  return transformed;
}

export function transformHardware(hardware: Record<string, ReactText>, type: hardwareTypes) {
  if (type === 'cpu') return cpuTransformer((hardware as unknown) as Cpu);
  if (type === 'gpu') return gpuTransformer((hardware as unknown) as Gpu);
  if (type === 'ram') return ramTransformer((hardware as unknown) as TypeRam);
  if (type === 'motherboard') return motherboardTransformer((hardware as unknown) as TypeMotherboard);
  if (type === 'powersupply') return powerSupplyTransformer((hardware as unknown) as PowerSupply);
  if (type === 'hdd') return hddTransformer((hardware as unknown) as TypeHdd);
  if (type === 'ssd') return ssdTransformer((hardware as unknown) as Ssd);
}
