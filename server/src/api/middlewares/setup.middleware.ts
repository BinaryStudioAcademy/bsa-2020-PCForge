import { FastifyInstance } from 'fastify';
import { SetupCreationAttributes } from '../../data/models/setup';
import { triggerServerError } from '../../helpers/global.helper';

export type ISetupMiddleware = (input: SetupCreationAttributes) => void;

export const SetupMiddleware = (fastify: FastifyInstance): ISetupMiddleware => {
  const {
    CpuService,
    GpuService,
    MotherboardService,
    PowerSupplyService,
    RamService,
    HddService,
    SsdService,
  } = fastify.services;

  return async (input: SetupCreationAttributes) => {
    const { cpuId, gpuId, motherboardId, powerSupplyId, ramId, hddId, ssdId, ramCount } = input;

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

    if (hddId) {
      const hdd = await HddService.getHddById(String(hddId));
      if (!hdd) {
        triggerServerError(`There's no hdd with id: ${hddId}`, 400);
      }
    }

    if (ssdId) {
      const ssd = await SsdService.getSsdById(String(ssdId));
      if (!ssd) {
        triggerServerError(`There's no hdd with id: ${ssdId}`, 400);
      }
    }

    if (!ramCount) {
      triggerServerError('ramCount field is required', 400);
    }
  };
};
