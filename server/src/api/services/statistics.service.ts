import { CpuAttributes } from '../../data/models/cpu';
import { GpuAttributes } from '../../data/models/gpu';
import { HddAttributes } from '../../data/models/hdd';
import { MotherboardAttributes } from '../../data/models/motherboard';
import { RamAttributes } from '../../data/models/ram';
import { SsdAttributes } from '../../data/models/ssd';
import { StatisticHardwareAttributes, StatisticUserSetupsAttributes } from '../../data/models/statistics';
import { SetupRepository } from '../../data/repositories/setup.repository';
import { UserRepository } from '../../data/repositories/user.repository';

interface IHardware {
  type: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'hdd' | 'motherboard';
  hardware: CpuAttributes | GpuAttributes | RamAttributes | SsdAttributes | HddAttributes | MotherboardAttributes;
}

export class StatisticService {
  constructor(private setupRepository: SetupRepository, private userRepository: UserRepository) {}

  async getCountOfUserSetups(): Promise<StatisticUserSetupsAttributes[]> {
    const users = (await this.userRepository.getAll({}, { from: 0, count: 1000 })).data;
    const statistics = [];
    for (const user of users) {
      const setupsCount = (await this.setupRepository.getAll({}, { from: 0, count: 1000 })).data.filter(
        (setup) => setup.authorId === user.id
      ).length;
      const statistic: StatisticUserSetupsAttributes = {
        userId: user.id,
        user,
        setupsCount,
      };
      statistics.push(statistic);
    }
    return statistics;
  }

  async getMostUsedHardware(): Promise<StatisticHardwareAttributes> {
    const setups = (await this.setupRepository.getAll({}, { from: 0, count: 1000 })).data;
    const hardwareMap = new Map<IHardware, number>();
    for (const setup of setups) {
      const cpu = { type: 'cpu', hardware: setup.cpu };
      const gpu = { type: 'gpu', hardware: setup.gpu };
      const ram = { type: 'ram', hardware: setup.ram };
      const motherboard = { type: 'motherboard', hardware: setup.motherboard };
      const ssd = { type: 'ssd', hardware: setup.ssd };
      const hdd = { type: 'hdd', hardware: setup.hdd };
    }
    //const staticData = await
  }
  /*async getMostActiveUsers(): Promise<StatisticModel> {

  }
  async getLastNewUsers(): Promise<StatisticModel> {

  }
  async getLastNewComments(): Promise<StatisticModel> {

  }
  async getLastNewRequests(): Promise<StatisticModel> {

  }
  async getLastNewSetups(): Promise<StatisticModel> {

  }*/
}
