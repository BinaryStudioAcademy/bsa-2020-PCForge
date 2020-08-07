import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface MotherboardAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MotherboardDataAttributes {
  name: string;
  socketId: number;
  ramTypeId: number;
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
