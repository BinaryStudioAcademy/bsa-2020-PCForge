import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { PowerSupplyRepository } from './powerSupply.repository';
import { RamRepository } from './ram.repository';

export interface Repositories {
  RamType: RamTypeRepository;
  Ram: RamRepository;
  PowerSupply: PowerSupplyRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const ramRepository = new RamRepository(models.Ram, models.RamType);
  const powerSupplyRepository = new PowerSupplyRepository(models.PowerSupply);
  const repositories: Repositories = {
    RamType: ramTypeRepository,
    Ram: ramRepository,
    PowerSupply: powerSupplyRepository,
  };
  return repositories;
};
