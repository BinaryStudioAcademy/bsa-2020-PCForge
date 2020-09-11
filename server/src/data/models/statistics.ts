import { CpuAttributes } from './cpu';
import { GpuAttributes } from './gpu';
import { HddAttributes } from './hdd';
import { MotherboardAttributes } from './motherboard';
import { RamAttributes } from './ram';
import { SsdAttributes } from './ssd';
import { UserAttributes } from './user';

export interface StatisticUserSetupsAttributes {
  // date: string;
  userId: number;
  setupsCount: number;
  user: UserAttributes;
}

export interface StatisticHardwareAttributes {
  // date: string;
  type: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'hdd' | 'motherboard';
  hardwareId: number;
  setupsCount: number;
  hardware: CpuAttributes | GpuAttributes | RamAttributes | SsdAttributes | HddAttributes | MotherboardAttributes;
}

// export interface CreationStatisticUserSetupsAttributes {
//   date: string;
//   userId: number;
//   maxCountCreatedSetups: number;
// }

// export interface StatisticUserSetupsModel extends Model<StatisticUserSetupsAttributes>, StatisticUserSetupsAttributes {}
// export class StatisticUserSetups extends Model<StatisticUserSetupsModel, StatisticUserSetupsAttributes> {}

// export type StatisticUserSetupsStatic = typeof Model & {
//   new (values?: Record<string, unknown>, options?: BuildOptions): StatisticUserSetupsModel;
// };

// Don't connect to sequelize
// export function StatisticFactory(sequelize: Sequelize): StatisticStatic {
//   return <StatisticStatic>sequelize.define('statistic', {
//     date: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//     name: {
//       allowNull: true,
//       type: DataTypes.STRING(150),
//     },
//   });
// }
