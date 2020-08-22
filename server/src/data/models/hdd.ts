import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface HddAttributes {
  id: number;
  name: string;
  capacity: number;
  size: number;
  sata: number;
  m2: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface HddCreationAttributes {
  name: string;
  capacity: number;
  size: number;
  sata: number;
  m2: boolean;
}

export interface HddModel extends Model<HddAttributes>, HddAttributes {}
export class Hdd extends Model<HddModel, HddAttributes> {}

export type HddStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): HddModel;
};

export function HddFactory(sequelize: Sequelize): HddStatic {
  return <HddStatic>sequelize.define('hdd', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(150),
    },
    capacity: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    size: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    sata: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    m2: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
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
  });
}
