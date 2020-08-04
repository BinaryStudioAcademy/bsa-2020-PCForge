import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface NewsAttributes {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface NewsModel extends Model<NewsAttributes>, NewsAttributes {}
export class News extends Model<NewsModel, NewsAttributes> {}

export type NewsStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): NewsModel;
};

export function NewsFactory(sequelize: Sequelize): NewsStatic {
  return <NewsStatic>sequelize.define('news', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
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
