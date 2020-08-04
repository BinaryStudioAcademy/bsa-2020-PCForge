import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface GpuAttributes {
  id: number;
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
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
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    memorySize: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    coreClocks: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    directx: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    opengl: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    tdp: {
      allowNull: false,
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