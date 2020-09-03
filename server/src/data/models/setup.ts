import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { CpuAttributes } from './cpu';
import { GpuAttributes } from './gpu';
import { RamAttributes } from './ram';
import { HddAttributes } from './hdd';
import { SsdAttributes } from './ssd';
import { CommentAttributes } from './comment';
import { UserAttributes } from './user';

export interface SetupAttributes {
  id: number;
  title: string;
  description: string;
  comments_count: number;
  ratingCount: number;
  rating: number;
  image: string;
  authorId: number;
  cpu: CpuAttributes;
  gpu: GpuAttributes;
  ram: RamAttributes;
  hdd: HddAttributes;
  ssd: SsdAttributes;
  author: UserAttributes;
  parentId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SetupCreationAttributes {
  title: string;
  description: string;
  image: string;
  authorId: number;
  cpuId: number;
  gpuId: number;
  motherboardId: number;
  ramId: number;
  powerSupplyId: number;
  hddId: number;
  ssdId: number;
}

export interface SetupModel extends Model<SetupAttributes>, SetupAttributes {}
export class Setup extends Model<SetupModel, SetupAttributes> {}

export type SetupStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): SetupModel;
};

export function SetupFactory(sequelize: Sequelize): SetupStatic {
  return <SetupStatic>sequelize.define('setup', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(500),
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
}
