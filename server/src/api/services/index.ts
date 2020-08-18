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
import { GameService } from './game.service';
import { TopGameService } from './topGame.service';
import { NewsService } from './news.service';
import { RateService } from './rate.service';
import { CommentService } from './comment.service';
import { AddRequestService } from './addRequest.service';
import uploadService from './imageUpload.service';

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
  NewsService: NewsService;
  SetupService: SetupService;
  RateService: RateService;
  CommentService: CommentService;
  AddRequestService: AddRequestService;
  UploadImageService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamTypeRepository);
  const usersService = new UserService(repositories.UserRepository);
  const setupService = new SetupService(repositories.SetupRepository);
  const ramService = new RamService(repositories.RamRepository);
  const powerSupplyService = new PowerSupplyService(repositories.PowerSupplyRepository);
  const socketService = new SocketService(repositories.SocketRepository);
  const motherboardService = new MotherboardService(repositories.MotherboardRepository);
  const gpuService = new GpuService(repositories.GpuRepository);
  const cpuService = new CpuService(repositories.CpuRepository);
  const gameService = new GameService(repositories.GameRepository);
  const topGameService = new TopGameService(repositories.TopGameRepository);
  const newsService = new NewsService(repositories.NewsRepository);
  const rateService = new RateService(repositories.RateRepository);
  const commentService = new CommentService(repositories.CommentRepository);
  const addRequestService = new AddRequestService(repositories.AddRequestRepository);
  const services: Services = {
    AddRequestService: addRequestService,
    RamTypeService: ramTypeService,
    RamService: ramService,
    PowerSupplyService: powerSupplyService,
    SocketService: socketService,
    MotherboardService: motherboardService,
    GpuService: gpuService,
    CpuService: cpuService,
    UserService: usersService,
    SetupService: setupService,
    GameService: gameService,
    TopGameService: topGameService,
    NewsService: newsService,
    RateService: rateService,
    CommentService: commentService,
    UploadImageService: uploadService,
  };
  return services;
};
