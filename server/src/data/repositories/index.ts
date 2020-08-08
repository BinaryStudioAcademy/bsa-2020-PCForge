import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { UserRepository } from './user.Repository';
export interface Repositories {
  RamType: RamTypeRepository;
  Users: UserRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const usersRepository = new UserRepository(models.User);
  const repositories: Repositories = {
    RamType: ramTypeRepository,
    Users: usersRepository,
  };
  return repositories;
};
