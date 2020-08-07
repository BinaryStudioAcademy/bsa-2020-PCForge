import { Repositories } from '../../data/repositories';
import { GpuService } from './gpu.service';
import { MotherboardService } from './motherboard.service';
import { PowerSupplyService } from './powerSupply.service';
import { RamService } from './ram.service';
import { RamTypeService } from './ramType.service';
import { SocketService } from './socket.service';

export interface Services {
  RamTypeService: RamTypeService;
  RamService: RamService;
  PowerSupplyService: PowerSupplyService;
  SocketService: SocketService;
  MotherboardService: MotherboardService;
  GpuService: GpuService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamTypeRepository);
  const ramService = new RamService(repositories.RamRepository);
  const powerSupplyService = new PowerSupplyService(repositories.PowerSupplyRepository);
  const socketService = new SocketService(repositories.SocketRepository);
  const motherboardService = new MotherboardService(repositories.MotherboardRepository);
  const gpuService = new GpuService(repositories.GpuRepository);
  const services: Services = {
    RamTypeService: ramTypeService,
    RamService: ramService,
    PowerSupplyService: powerSupplyService,
    SocketService: socketService,
    MotherboardService: motherboardService,
    GpuService: gpuService,
  };
  return services;
};
