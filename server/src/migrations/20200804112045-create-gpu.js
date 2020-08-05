'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      interface: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      memorySize: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      coreClocks: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      directx: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      tdp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      performance: {
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
    await queryInterface.dropTable('gpus');
  },
};
