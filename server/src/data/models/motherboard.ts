import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { RamTypeAttributes } from './ramtype';
import { SocketAttributes } from './socket';

export interface MotherboardAttributes {
  id: number;
  name: string;
  socket: SocketAttributes;
  ramType: RamTypeAttributes;
  sata: number;
  m2: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MotherboardCreationAttributes {
  name: string;
  socketId: number;
  ramTypeId: number;
  sata: number;
  m2: boolean;
}

export interface MotherboardModel extends Model<MotherboardAttributes>, MotherboardAttributes {}
export class Motherboard extends Model<MotherboardModel, MotherboardAttributes> {}

export type MotherboardStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): MotherboardModel;
};

export function MotherboardFactory(sequelize: Sequelize): MotherboardStatic {
  return <MotherboardStatic>sequelize.define('motherboard', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(150),
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
