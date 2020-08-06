import { Repositories } from '../../data/repositories';
import { PowerSupplyService } from './powerSupply.service';
import { RamService } from './ram.service';
import { RamTypeService } from './ramType.service';

export interface Services {
  RamTypeService: RamTypeService;
  RamService: RamService;
  PowerSupplyService: PowerSupplyService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamType);
  const ramService = new RamService(repositories.Ram);
  const powerSupplyService = new PowerSupplyService(repositories.PowerSupply);
  const services: Services = {
    RamTypeService: ramTypeService,
    RamService: ramService,
    PowerSupplyService: powerSupplyService,
  };
  return services;
};
