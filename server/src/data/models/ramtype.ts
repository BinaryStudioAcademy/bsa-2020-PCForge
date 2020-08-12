import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface RamTypeAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RamTypeCreationAttributes {
  name: string;
}

export interface RamTypeModel extends Model<RamTypeAttributes>, RamTypeAttributes {}
export class RamType extends Model<RamTypeModel, RamTypeAttributes> {}

export type RamTypeStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): RamTypeModel;
};

export function RamTypeFactory(sequelize: Sequelize): RamTypeStatic {
  return <RamTypeStatic>sequelize.define('ramType', {
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
