// 'use strict';
// import { Model } from 'sequelize';
// module.exports = (sequelize, DataTypes) => {
//   class News extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       this.hasMany(models.Rate, { foreignKey: 'rateble_id', constraints: false });
//       this.hasMany(models.Comment, { foreignKey: 'commentable_id', constraints: false });
//     }
//   }
//   News.init(
//     {
//       title: {
//         allowNull: false,
//         type: DataTypes.STRING(50),
//       },
//       content: {
//         allowNull: false,
//         type: DataTypes.TEXT,
//       },
//       image: {
//         allowNull: false,
//         type: DataTypes.STRING(50),
//       },
//     },
//     {
//       sequelize,
//       modelName: 'News',
//     }
//   );
//   return News;
// };

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
