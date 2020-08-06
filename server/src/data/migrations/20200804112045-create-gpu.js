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
        type: Sequelize.STRING(50),
      },
      memorySize: {
        type: Sequelize.INTEGER,
      },
      coreClocks: {
        type: Sequelize.INTEGER,
      },
      opengl: {
        type: Sequelize.STRING(50),
      },
      tdp: {
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
