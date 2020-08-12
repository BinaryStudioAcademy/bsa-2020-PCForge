import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface PowerSupplyAttributes {
  id: number;
  name: string;
  power: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PowerSupplyCreationAttributes {
  name: string;
  power: number;
}

export interface PowerSupplyModel extends Model<PowerSupplyAttributes>, PowerSupplyAttributes {}
export class PowerSupply extends Model<PowerSupplyModel, PowerSupplyAttributes> {}

export type PowerSupplyStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): PowerSupplyModel;
};

export function PowerSupplyFactory(sequelize: Sequelize): PowerSupplyStatic {
  return <PowerSupplyStatic>sequelize.define('powerSupply', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
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
