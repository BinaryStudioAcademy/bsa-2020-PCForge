import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface GpuAttributes {
  id: number;
  name: string;
  interface: string;
  memorySize: number;
  coreClocks: number;
  opengl: string;
  tdp: number;
  performance: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GpuCreationAttributes {
  name: string;
  interface: string;
  memorySize: number;
  coreClocks: number;
  opengl: string;
  tdp: number;
  performance: number;
}

export interface GpuModel extends Model<GpuAttributes>, GpuAttributes {}
export class Gpu extends Model<GpuModel, GpuAttributes> {}

export type GpuStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): GpuModel;
};

export function GpuFactory(sequelize: Sequelize): GpuStatic {
  return <GpuStatic>sequelize.define('gpu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(150),
    },
    interface: {
      allowNull: true,
      type: DataTypes.STRING(150),
    },
    memorySize: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    coreClocks: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    opengl: {
      allowNull: true,
      type: DataTypes.STRING(150),
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
