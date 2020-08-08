import { Repositories } from '../../data/repositories';
import { RamTypeService } from './ramType.service';
import { UserService } from './user.service';

export interface Services {
  RamTypeService: RamTypeService;
  UserService: UserService;
}

export const initializeServices = (repositories: Repositories): Services => {
  const ramTypeService = new RamTypeService(repositories.RamType);
  const usersService = new UserService(repositories.Users);
  const services: Services = {
    RamTypeService: ramTypeService,
    UserService: usersService,
  };
  return services;
};
