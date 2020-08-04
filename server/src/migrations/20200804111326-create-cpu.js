'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cpus', {
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
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tdp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cores: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      class: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      socketId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sockets',
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
    await queryInterface.dropTable('Cpus');
  },
};
