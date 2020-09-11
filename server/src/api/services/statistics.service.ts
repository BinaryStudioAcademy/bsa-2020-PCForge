import { map } from 'bluebird';
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
  type: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'hdd';
  hardware: CpuAttributes | GpuAttributes | RamAttributes | SsdAttributes | HddAttributes;
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

  async getMostUsedHardware(): Promise<StatisticHardwareAttributes[]> {
    const setups = (await this.setupRepository.getSetups({ from: 0, count: 1000 }, 1)).data;
    const hardwareMap = new Map<string, [IHardware, number]>();
    const updateMap = (value: IHardware) => {
      const json = JSON.stringify(value);
      if (hardwareMap.get(json)) {
        hardwareMap.set(json, [value, hardwareMap.get(json)[1] + 1]);
      } else {
        hardwareMap.set(json, [value, 1]);
      }
    };
    for (const setup of setups) {
      if (setup.cpu) {
        const cpu: IHardware = { type: 'cpu', hardware: setup.cpu };
        updateMap(cpu);
      }
      if (setup.gpu) {
        const gpu: IHardware = { type: 'gpu', hardware: setup.gpu };
        updateMap(gpu);
      }
      if (setup.ram) {
        const ram: IHardware = { type: 'ram', hardware: setup.ram };
        updateMap(ram);
      }
      // const motherboard = { type: 'motherboard', hardware: setup.motherboard };
      if (setup.ssd) {
        const ssd: IHardware = { type: 'ssd', hardware: setup.ssd };
        updateMap(ssd);
      }
      if (setup.hdd) {
        const hdd: IHardware = { type: 'hdd', hardware: setup.hdd };
        updateMap(hdd);
      }
    }

    const statistics: StatisticHardwareAttributes[] = [];
    for (const el of hardwareMap) {
      const [, [hardware, count]] = el;
      statistics.push({
        type: hardware.type,
        hardwareId: hardware.hardware.id,
        setupsCount: count,
        hardware: hardware.hardware,
      });
    }

    return statistics;
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
