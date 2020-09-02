import { FastifyInstance } from 'fastify';
import { CommentCreationAttributes } from '../../data/models/comment';
import { NewsModel } from '../../data/models/news';
import { GameModel } from '../../data/models/game';
import { SetupModel } from '../../data/models/setup';
import { triggerServerError } from '../../helpers/global.helper';
import { GpuModel } from '../../data/models/gpu';
import { CpuModel } from '../../data/models/cpu';
import { RamModel } from '../../data/models/ram';
import { MotherboardModel } from '../../data/models/motherboard';
import { PowerSupplyModel } from '../../data/models/powersupply';
import { HddModel } from '../../data/models/hdd';
import { SsdModel } from '../../data/models/ssd';

export type ICommentMiddleware = (inputComment: CommentCreationAttributes) => void;
export type IInstance =
  | NewsModel
  | GameModel
  | SetupModel
  | CpuModel
  | GpuModel
  | RamModel
  | MotherboardModel
  | PowerSupplyModel
  | HddModel
  | SsdModel;

export const CommentMiddleware = (fastify: FastifyInstance): ICommentMiddleware => {
  const {
    NewsService,
    GameService,
    SetupService,
    CpuService,
    GpuService,
    MotherboardService,
    RamService,
    PowerSupplyService,
    HddService,
    SsdService,
  } = fastify.services;

  return async (inputComment: CommentCreationAttributes) => {
    const { commentableType, commentableId } = inputComment;
    const stringCommentableId = commentableId.toString();
    let instance: IInstance;

    switch (commentableType) {
      case 'news':
        instance = await NewsService.getNewsById(stringCommentableId);
        break;
      case 'game':
        instance = await GameService.getGameById(stringCommentableId);
        break;
      case 'setup':
        instance = await SetupService.getSetupById(stringCommentableId);
        break;
      case 'cpu':
        instance = await CpuService.getCpuById(stringCommentableId);
        break;
      case 'gpu':
        instance = await GpuService.getGpuById(stringCommentableId);
        break;
      case 'ram':
        instance = await RamService.getRamById(stringCommentableId);
        break;
      case 'powersupply':
        instance = await PowerSupplyService.getPowerSupplyById(stringCommentableId);
        break;
      case 'motherboard':
        instance = await MotherboardService.getMotherboardById(stringCommentableId);
        break;
      case 'hdd':
        instance = await HddService.getHddById(stringCommentableId);
        break;
      case 'ssd':
        instance = await SsdService.getSsdById(stringCommentableId);
        break;
    }
    if (!instance) {
      triggerServerError(`There's no instance from table: ${commentableType} and with id: ${commentableId}`, 404);
    }
  };
};
