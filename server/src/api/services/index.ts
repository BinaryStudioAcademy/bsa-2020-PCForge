import { Repositories } from '../../data/repositories';
import { RamTypeService } from './ramType.service';

export interface Services {
  RamTypeService: RamTypeService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamType);
  const services: Services = {
    RamTypeService: ramTypeService,
  };
  return services;
};
