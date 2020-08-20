import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { UserRepository } from './user.repository';
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
import { RateRepository } from './rate.repository';
import { CommentRepository } from './comment.repository';
import { AddRequestRepository } from './addRequest.repository';

export interface Repositories {
  RamTypeRepository: RamTypeRepository;
  RamRepository: RamRepository;
  PowerSupplyRepository: PowerSupplyRepository;
  SocketRepository: SocketRepository;
  SetupRepository: SetupRepository;
  MotherboardRepository: MotherboardRepository;
  GpuRepository: GpuRepository;
  CpuRepository: CpuRepository;
  UserRepository: UserRepository;
  GameRepository: GameRepository;
  TopGameRepository: TopGameRepository;
  NewsRepository: NewsRepository;
  RateRepository: RateRepository;
  CommentRepository: CommentRepository;
  AddRequestRepository: AddRequestRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const usersRepository = new UserRepository(models.User);
  const ramRepository = new RamRepository(models.Ram, models.RamType);
  const powerSupplyRepository = new PowerSupplyRepository(models.PowerSupply);
  const socketRepository = new SocketRepository(models.Socket);
  const setupRepository = new SetupRepository(models.Setup, models.Cpu, models.Gpu, models.Ram);
  const motherboardRepository = new MotherboardRepository(models.Motherboard, models.RamType, models.Socket);
  const gpuRepository = new GpuRepository(models.Gpu);
  const cpuRepository = new CpuRepository(models.Cpu, models.Socket);
  const gameRepository = new GameRepository(models.Game, models.Cpu, models.Gpu);
  const topGameRepository = new TopGameRepository(models.TopGame, models.Game, models.Cpu, models.Gpu);
  const newsRepository = new NewsRepository(models.News);
  const rateRepository = new RateRepository(models.Rate);
  const commentRepository = new CommentRepository(models.Comment);
  const addRequestRepository = new AddRequestRepository(models.AddRequest);
  const repositories: Repositories = {
    RamTypeRepository: ramTypeRepository,
    RamRepository: ramRepository,
    PowerSupplyRepository: powerSupplyRepository,
    SocketRepository: socketRepository,
    MotherboardRepository: motherboardRepository,
    GpuRepository: gpuRepository,
    CpuRepository: cpuRepository,
    SetupRepository: setupRepository,
    UserRepository: usersRepository,
    GameRepository: gameRepository,
    TopGameRepository: topGameRepository,
    NewsRepository: newsRepository,
    RateRepository: rateRepository,
    CommentRepository: commentRepository,
    AddRequestRepository: addRequestRepository
  };
  return repositories;
};
