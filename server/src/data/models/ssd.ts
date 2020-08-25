import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface SsdAttributes {
  id: number;
  name: string;
  capacity: number;
  size: number;
  sata: number;
  m2: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SsdCreationAttributes {
  name: string;
  capacity: number;
  size: number;
  sata: number;
  m2: boolean;
}

export interface SsdModel extends Model<SsdAttributes>, SsdAttributes {}
export class Ssd extends Model<SsdModel, SsdAttributes> {}

export type SsdStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): SsdModel;
};

export function SsdFactory(sequelize: Sequelize): SsdStatic {
  return <SsdStatic>sequelize.define('ssd', {
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
    sata: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    size: {
      allowNull: false,
      type: DataTypes.FLOAT,
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
