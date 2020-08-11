import { Repositories } from '../../data/repositories';
import { CpuService } from './cpu.service';
import { GpuService } from './gpu.service';
import { MotherboardService } from './motherboard.service';
import { PowerSupplyService } from './powerSupply.service';
import { RamService } from './ram.service';
import { RamTypeService } from './ramType.service';
import { UserService } from './user.service';
import { SocketService } from './socket.service';
import { SetupService } from './setup.service';

export interface Services {
  RamTypeService: RamTypeService;
  RamService: RamService;
  PowerSupplyService: PowerSupplyService;
  SocketService: SocketService;
  MotherboardService: MotherboardService;
  GpuService: GpuService;
  CpuService: CpuService;
  UserService: UserService;
  SetupService: SetupService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamType);
  const usersService = new UserService(repositories.Users);
  const setupService = new SetupService(repositories.SetupRepository);
  const ramService = new RamService(repositories.RamRepository);
  const powerSupplyService = new PowerSupplyService(repositories.PowerSupplyRepository);
  const socketService = new SocketService(repositories.SocketRepository);
  const motherboardService = new MotherboardService(repositories.MotherboardRepository);
  const gpuService = new GpuService(repositories.GpuRepository);
  const cpuService = new CpuService(repositories.CpuRepository);
  const services: Services = {
    RamTypeService: ramTypeService,
    RamService: ramService,
    PowerSupplyService: powerSupplyService,
    SocketService: socketService,
    MotherboardService: motherboardService,
    GpuService: gpuService,
    CpuService: cpuService,
    UserService: usersService,
    SetupService: setupService,
  };
  return services;
};
