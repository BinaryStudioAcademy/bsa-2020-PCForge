import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { UserRepository } from './user.repository';
import { UserGameRepository } from './usergame.repository';
import { CpuRepository } from './cpu.repository';
import { GpuRepository } from './gpu.repository';
import { MotherboardRepository } from './motherboard.repository';
import { PowerSupplyRepository } from './powerSupply.repository';
import { RamRepository } from './ram.repository';
import { SocketRepository } from './socket.repository';
import { SetupRepository } from './setup.repository';
import { GameRepository } from './game.repository';
import { TopGameRepository } from './topGame.repository';
import { NewsRepository } from './news.repository';

export interface Repositories {
  RamTypeRepository: RamTypeRepository;
  RamRepository: RamRepository;
  PowerSupplyRepository: PowerSupplyRepository;
  SocketRepository: SocketRepository;
  SetupRepository: SetupRepository;
  MotherboardRepository: MotherboardRepository;
  GpuRepository: GpuRepository;
  CpuRepository: CpuRepository;
  UserGame: UserGameRepository;
  UserRepository: UserRepository;
  GameRepository: GameRepository;
  TopGameRepository: TopGameRepository;
  NewsRepository: NewsRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const usersRepository = new UserRepository(models.User);
  const userGameRepository = new UserGameRepository(models.UserGame);
  const ramRepository = new RamRepository(models.Ram, models.RamType);
  const powerSupplyRepository = new PowerSupplyRepository(models.PowerSupply);
  const socketRepository = new SocketRepository(models.Socket);
  const setupRepository = new SetupRepository(models.Setup);
  const motherboardRepository = new MotherboardRepository(models.Motherboard, models.RamType, models.Socket);
  const gpuRepository = new GpuRepository(models.Gpu);
  const cpuRepository = new CpuRepository(models.Cpu, models.Socket);
  const gameRepository = new GameRepository(models.Game, models.Cpu, models.Gpu);
  const topGameRepository = new TopGameRepository(models.TopGame, models.Game, models.Cpu, models.Gpu);
  const newsRepository = new NewsRepository(models.News);
  const repositories: Repositories = {
    RamTypeRepository: ramTypeRepository,
    RamRepository: ramRepository,
    PowerSupplyRepository: powerSupplyRepository,
    SocketRepository: socketRepository,
    MotherboardRepository: motherboardRepository,
    GpuRepository: gpuRepository,
    CpuRepository: cpuRepository,
    UserGame: userGameRepository,
    SetupRepository: setupRepository,
    UserRepository: usersRepository,
    GameRepository: gameRepository,
    TopGameRepository: topGameRepository,
    NewsRepository: newsRepository,
  };
  return repositories;
};
