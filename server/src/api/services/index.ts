import fp from 'fastify-plugin';

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
import { UploadService } from './imageUpload.service';
import { PerformanceService } from './performance.service';
import { UserGameService } from './userGame.service';
import { HddService } from './hdd.service';
import { SsdService } from './ssd.service';
import { MailService } from './mail.service';
import { AuthService } from './auth.service';
import { CommentRateService } from './commentRate.service';
import { NotificationService, notificationServiceFactory } from './NotificationService/notification.service';
import { HardwareService } from './hardware.service';
import { StatisticService } from './statistics.service';

export interface Services {
  AuthService: AuthService;
  AddRequestService: AddRequestService;
  CommentService: CommentService;
  CpuService: CpuService;
  HddService: HddService;
  GameService: GameService;
  GpuService: GpuService;
  MailService: MailService;
  MotherboardService: MotherboardService;
  NewsService: NewsService;
  PerformanceService: PerformanceService;
  PowerSupplyService: PowerSupplyService;
  RamService: RamService;
  RamTypeService: RamTypeService;
  RateService: RateService;
  SetupService: SetupService;
  SocketService: SocketService;
  SsdService: SsdService;
  TopGameService: TopGameService;
  UploadImageService: UploadService;
  UserGameService: UserGameService;
  UserService: UserService;
  CommentRateService: CommentRateService;
  NotificationService: NotificationService;
  HardwareService: HardwareService;
  StatisticService: StatisticService;
}

export default fp(async (fastify, opts, next) => {
  try {
    const { nodemailer, repositories, redis, websocket } = fastify;
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
    const commentRateService = new CommentRateService(repositories.CommentRateRepository);
    const performanceService = new PerformanceService(
      repositories.CpuRepository,
      repositories.GpuRepository,
      repositories.GameRepository
    );
    const addRequestService = new AddRequestService(repositories.AddRequestRepository);
    const hddService = new HddService(repositories.HddRepository);
    const ssdService = new SsdService(repositories.SsdRepository);
    const mailService = new MailService(nodemailer);
    const userGameService = new UserGameService(
      repositories.UserGameRepository,
      repositories.UserRepository,
      repositories.GameRepository
    );
    const uploadService = new UploadService();
    const authService = new AuthService(mailService, usersService);
    const notificationService = await notificationServiceFactory(redis, websocket);
    const hardwareService = new HardwareService(
      repositories.CpuRepository,
      repositories.GpuRepository,
      repositories.RamRepository,
      repositories.MotherboardRepository,
      repositories.PowerSupplyRepository,
      repositories.HddRepository,
      repositories.SsdRepository,
      repositories.SetupRepository
    );
    const statisticService = new StatisticService(repositories.SetupRepository, repositories.UserRepository);
    const services: Services = {
      AuthService: authService,
      AddRequestService: addRequestService,
      CommentService: commentService,
      CpuService: cpuService,
      HddService: hddService,
      GameService: gameService,
      GpuService: gpuService,
      MailService: mailService,
      MotherboardService: motherboardService,
      NewsService: newsService,
      PerformanceService: performanceService,
      PowerSupplyService: powerSupplyService,
      RamService: ramService,
      RamTypeService: ramTypeService,
      RateService: rateService,
      SetupService: setupService,
      SocketService: socketService,
      SsdService: ssdService,
      TopGameService: topGameService,
      UploadImageService: uploadService,
      UserGameService: userGameService,
      UserService: usersService,
      CommentRateService: commentRateService,
      NotificationService: notificationService,
      HardwareService: hardwareService,
      StatisticService: statisticService,
    };
    fastify.decorate('services', services);
    console.log('services were successfully initialized');
    next();
  } catch (err) {
    console.error('Unable to initialize services:', err);
    next(err);
  }
});
