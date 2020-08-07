import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';

export interface Repositories {
  RamType: RamTypeRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const repositories: Repositories = {
    RamType: ramTypeRepository,
  };
  return repositories;
};
