'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hdds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      capacity: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      size: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      sata: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rpm: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ram: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hdds');
  },
};
