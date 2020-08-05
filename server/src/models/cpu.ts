import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface CpuAttributes {
  id: number;
  name: string;
  performance: number;
  clockspeed: number | null;
  tdp: number | null;
  cores: number | null;
  class: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface CpuModel extends Model<CpuAttributes>, CpuAttributes {}
export class Cpu extends Model<CpuModel, CpuAttributes> {}

export type CpuStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CpuModel;
};

export function CpuFactory(sequelize: Sequelize): CpuStatic {
  return <CpuStatic>sequelize.define('cpus', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    performance: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    clockspeed: {
      type: DataTypes.INTEGER,
    },
    tdp: {
      type: DataTypes.INTEGER,
    },
    cores: {
      type: DataTypes.INTEGER,
    },
    class: {
      type: DataTypes.STRING(50),
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
