import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface RamAttributes {
  id: number;
  name: string;
  memorySize: number;
  frequency: number;
  power: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface RamModel extends Model<RamAttributes>, RamAttributes {}
export class Ram extends Model<RamModel, RamAttributes> {}

export type RamStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): RamModel;
};

export function RamFactory(sequelize: Sequelize): RamStatic {
  return <RamStatic>sequelize.define('rams', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    memorySize: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    frequency: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    power: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
