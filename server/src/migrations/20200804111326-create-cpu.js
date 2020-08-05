'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cpus', {
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
      performance: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      clockspeed: {
        type: Sequelize.INTEGER,
      },
      tdp: {
        type: Sequelize.INTEGER,
      },
      cores: {
        type: Sequelize.INTEGER,
      },
      class: {
        type: Sequelize.STRING(50),
      },
      socketId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sockets',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('cpus');
  },
};
