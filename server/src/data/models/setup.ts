import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface SetupAttributes {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface SetupModel extends Model<SetupAttributes>, SetupAttributes {}
export class Setup extends Model<SetupModel, SetupAttributes> {}

export type SetupStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): SetupModel;
};

export function SetupFactory(sequelize: Sequelize): SetupStatic {
  return <SetupStatic>sequelize.define('setups', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    image: {
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
