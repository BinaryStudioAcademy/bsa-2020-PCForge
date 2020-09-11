import { StatisticHardwareAttributes, StatisticUserSetupsAttributes } from '../../data/models/statistics';
import { SetupRepository } from '../../data/repositories/setup.repository';
import { UserRepository } from '../../data/repositories/user.repository';

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

  // async getMostUsedHardware(): Promise<StatisticHardwareAttributes> {
  //   const setups = await this se
  //   //const staticData = await
  // }
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
