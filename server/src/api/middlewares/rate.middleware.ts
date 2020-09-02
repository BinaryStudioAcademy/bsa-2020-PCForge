import { FastifyInstance } from 'fastify';
import { RateCreationAttributes } from '../../data/models/rate';
import { NewsModel } from '../../data/models/news';
import { GameModel } from '../../data/models/game';
import { SetupModel } from '../../data/models/setup';
import { triggerServerError } from '../../helpers/global.helper';
import { CpuModel } from '../../data/models/cpu';
import { GpuModel } from '../../data/models/gpu';
import { RamModel } from '../../data/models/ram';
import { MotherboardModel } from '../../data/models/motherboard';
import { PowerSupplyModel } from '../../data/models/powersupply';

export type IRateMiddleware = (inputRate: RateCreationAttributes) => void;
export type IInstance =
  | NewsModel
  | GameModel
  | SetupModel
  | CpuModel
  | GpuModel
  | RamModel
  | MotherboardModel
  | PowerSupplyModel;

export const RateMiddleware = (fastify: FastifyInstance): IRateMiddleware => {
  const {
    NewsService,
    GameService,
    SetupService,
    CpuService,
    GpuService,
    RamService,
    PowerSupplyService,
    MotherboardService,
  } = fastify.services;

  return async (inputRate: RateCreationAttributes) => {
    const { ratebleType, ratebleId } = inputRate;
    const stringRatebleId = ratebleId.toString();
    let instance: IInstance;

    switch (ratebleType) {
      case 'news':
        instance = await NewsService.getNewsById(stringRatebleId);
        break;
      case 'game':
        instance = await GameService.getGameById(stringRatebleId);
        break;
      case 'setup':
        instance = await SetupService.getSetupById(stringRatebleId);
        break;
      case 'cpu':
        instance = await CpuService.getCpuById(stringRatebleId);
        break;
      case 'gpu':
        instance = await GpuService.getGpuById(stringRatebleId);
        break;
      case 'ram':
        instance = await RamService.getRamById(stringRatebleId);
        break;
      case 'powersupply':
        instance = await PowerSupplyService.getPowerSupplyById(stringRatebleId);
        break;
      case 'motherboard':
        instance = await MotherboardService.getMotherboardById(stringRatebleId);
        break;
    }
    if (!instance) {
      triggerServerError(`There's no instance from table: ${ratebleType} and with id: ${ratebleId}`, 404);
    }
  };
};
