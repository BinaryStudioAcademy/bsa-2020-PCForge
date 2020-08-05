import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface SocketAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface SocketModel extends Model<SocketAttributes>, SocketAttributes {}
export class Socket extends Model<SocketModel, SocketAttributes> {}

export type SocketStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): SocketStatic;
};

export function SocketFactory(sequelize: Sequelize): SocketStatic {
  return <SocketStatic>sequelize.define('sockets', {
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
