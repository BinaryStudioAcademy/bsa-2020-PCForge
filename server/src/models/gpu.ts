import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface GpuAttributes {
  id: number;
  name: string;
  interface: string | null;
  memorySize: number | null;
  coreClocks: number | null;
  directx: string | null;
  tdp: number | null;
  performance: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface GpuModel extends Model<GpuAttributes>, GpuAttributes {}
export class Gpu extends Model<GpuModel, GpuAttributes> {}

export type GpuStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): GpuModel;
};

export function GpuFactory(sequelize: Sequelize): GpuStatic {
  return <GpuStatic>sequelize.define('gpus', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    interface: {
      type: DataTypes.STRING(50),
    },
    memorySize: {
      type: DataTypes.INTEGER,
    },
    coreClocks: {
      type: DataTypes.INTEGER,
    },
    directx: {
      type: DataTypes.STRING(50),
    },
    tdp: {
      type: DataTypes.INTEGER,
    },
    performance: {
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
