import { FastifyInstance } from 'fastify';
import { SetupCreationAttributes } from '../../data/models/setup';
import { triggerServerError } from '../../helpers/global.helper';

export type ISetupMiddleware = (inputRate: SetupCreationAttributes) => void;

export const SetupMiddleware = (fastify: FastifyInstance): ISetupMiddleware => {
  const { UserService, CpuService, GpuService, MotherboardService, PowerSupplyService, RamService } = fastify.services;

  return async (inputRate: SetupCreationAttributes) => {
    const { authorId, cpuId, gpuId, motherboardId, powerSupplyId, ramId } = inputRate;

    if (authorId) {
      const user = await UserService.getUser(authorId.toString());
      if (!user) {
        triggerServerError(`There's no user with id: ${authorId}`, 404);
      }
    }

    if (cpuId) {
      const cpu = await CpuService.getCpuById(cpuId.toString());
      if (!cpu) {
        triggerServerError(`There's no cpu with id: ${cpuId}`, 404);
      }
    }

    if (gpuId) {
      const gpu = await GpuService.getGpuById(gpuId.toString());
      if (!gpu) {
        triggerServerError(`There's no gpu with id: ${gpuId}`, 404);
      }
    }

    if (motherboardId) {
      const motherboard = await MotherboardService.getMotherboardById(motherboardId.toString());
      if (!motherboard) {
        triggerServerError(`There's no motherboard with id: ${cpuId}`, 404);
      }
    }

    if (ramId) {
      const ram = await RamService.getRamById(ramId.toString());
      if (!ram) {
        triggerServerError(`There's no ram with id: ${ramId}`, 404);
      }
    }

    if (powerSupplyId) {
      const powerSupply = await PowerSupplyService.getPowerSupplyById(powerSupplyId.toString());
      if (!powerSupply) {
        triggerServerError(`There's no cpu with id: ${powerSupplyId}`, 404);
      }
    }
  };
};
