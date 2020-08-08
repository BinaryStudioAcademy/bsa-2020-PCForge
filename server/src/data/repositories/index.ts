import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { CpuRepository } from './cpu.repository';
import { GpuRepository } from './gpu.repository';
import { MotherboardRepository } from './motherboard.repository';
import { PowerSupplyRepository } from './powerSupply.repository';
import { RamRepository } from './ram.repository';
import { SocketRepository } from './socket.repository';

export interface Repositories {
  RamTypeRepository: RamTypeRepository;
  RamRepository: RamRepository;
  PowerSupplyRepository: PowerSupplyRepository;
  SocketRepository: SocketRepository;
  MotherboardRepository: MotherboardRepository;
  GpuRepository: GpuRepository;
  CpuRepository: CpuRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const ramRepository = new RamRepository(models.Ram, models.RamType);
  const powerSupplyRepository = new PowerSupplyRepository(models.PowerSupply);
  const socketRepository = new SocketRepository(models.Socket);
  const motherboardRepository = new MotherboardRepository(models.Motherboard, models.RamType, models.Socket);
  const gpuRepository = new GpuRepository(models.Gpu);
  const cpuRepository = new CpuRepository(models.Cpu, models.Socket);
  const repositories: Repositories = {
    RamTypeRepository: ramTypeRepository,
    RamRepository: ramRepository,
    PowerSupplyRepository: powerSupplyRepository,
    SocketRepository: socketRepository,
    MotherboardRepository: motherboardRepository,
    GpuRepository: gpuRepository,
    CpuRepository: cpuRepository,
  };
  return repositories;
};
