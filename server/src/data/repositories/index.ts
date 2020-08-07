import { Models } from '../../data/db/connection';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { PowerSupplyRepository } from './powerSupply.repository';
import { RamRepository } from './ram.repository';
import { SocketRepository } from './socket.repository';

export interface Repositories {
  RamTypeRepository: RamTypeRepository;
  RamRepository: RamRepository;
  PowerSupplyRepository: PowerSupplyRepository;
  SocketRepository: SocketRepository;
}

export const initializeRepositories = (models: Models): Repositories => {
  const ramTypeRepository = new RamTypeRepository(models.RamType);
  const ramRepository = new RamRepository(models.Ram, models.RamType);
  const powerSupplyRepository = new PowerSupplyRepository(models.PowerSupply);
  const socketRepository = new SocketRepository(models.Socket);
  const repositories: Repositories = {
    RamTypeRepository: ramTypeRepository,
    RamRepository: ramRepository,
    PowerSupplyRepository: powerSupplyRepository,
    SocketRepository: socketRepository,
  };
  return repositories;
};
