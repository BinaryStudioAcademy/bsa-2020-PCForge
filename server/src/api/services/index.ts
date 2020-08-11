import { Repositories } from '../../data/repositories';
import { CpuService } from './cpu.service';
import { GpuService } from './gpu.service';
import { MotherboardService } from './motherboard.service';
import { PowerSupplyService } from './powerSupply.service';
import { RamService } from './ram.service';
import { RamTypeService } from './ramType.service';
import { UserService } from './user.service';
import { SocketService } from './socket.service';
import { GameService } from './game.service';
import { TopGameService } from './topGame.service';

export interface Services {
  RamTypeService: RamTypeService;
  RamService: RamService;
  PowerSupplyService: PowerSupplyService;
  SocketService: SocketService;
  MotherboardService: MotherboardService;
  GpuService: GpuService;
  CpuService: CpuService;
  UserService: UserService;
  GameService: GameService;
  TopGameService: TopGameService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamTypeRepository);
  const usersService = new UserService(repositories.UserRepository);
  const ramService = new RamService(repositories.RamRepository);
  const powerSupplyService = new PowerSupplyService(repositories.PowerSupplyRepository);
  const socketService = new SocketService(repositories.SocketRepository);
  const motherboardService = new MotherboardService(repositories.MotherboardRepository);
  const gpuService = new GpuService(repositories.GpuRepository);
  const cpuService = new CpuService(repositories.CpuRepository);
  const gameService = new GameService(repositories.GameRepository);
  const topGameService = new TopGameService(repositories.TopGameRepository);
  const services: Services = {
    RamTypeService: ramTypeService,
    RamService: ramService,
    PowerSupplyService: powerSupplyService,
    SocketService: socketService,
    MotherboardService: motherboardService,
    GpuService: gpuService,
    CpuService: cpuService,
    UserService: usersService,
    GameService: gameService,
    TopGameService: topGameService,
  };
  return services;
};
