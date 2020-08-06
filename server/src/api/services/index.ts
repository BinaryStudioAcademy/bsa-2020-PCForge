import { Repositories } from '../../data/repositories';
import { RamService } from './ram.service';
import { RamTypeService } from './ramType.service';

export interface Services {
  RamTypeService: RamTypeService;
  RamService: RamService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamType);
  const ramService = new RamService(repositories.Ram);
  const services: Services = {
    RamTypeService: ramTypeService,
    RamService: ramService,
  };
  return services;
};
