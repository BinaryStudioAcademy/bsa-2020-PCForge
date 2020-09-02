import { FastifyInstance } from 'fastify';
import { triggerServerError } from '../../helpers/global.helper';
import { GameCreationAttributes } from '../../data/models/game';

export type IGamedMiddleware = (input: GameCreationAttributes) => void;

export const GameMiddleware = (fastify: FastifyInstance): IGamedMiddleware => {
  const { CpuService, GpuService } = fastify.services;

  return async (input: GameCreationAttributes) => {
    const { minimalCpuId, minimalGpuId, recommendedCpuId, recommendedGpuId } = input;
    if (minimalCpuId) {
      const cpu = CpuService.getCpuById(String(minimalCpuId));
      if (!cpu) {
        triggerServerError(`Cpu with id ${minimalCpuId} does not exists`, 400);
      }
    }
    if (recommendedCpuId) {
      const cpu = CpuService.getCpuById(String(recommendedCpuId));
      if (!cpu) {
        triggerServerError(`Cpu with id ${minimalCpuId} does not exists`, 400);
      }
    }
    if (minimalGpuId) {
      const gpu = GpuService.getGpuById(String(minimalGpuId));
      if (!gpu) {
        triggerServerError(`Gpu with id ${minimalGpuId} does not exists`, 400);
      }
    }
    if (recommendedGpuId) {
      const gpu = GpuService.getGpuById(String(recommendedGpuId));
      if (!gpu) {
        triggerServerError(`Gpu with id ${recommendedGpuId} does not exists`, 400);
      }
    }
  };
};
