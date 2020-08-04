'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('games', {
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
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      recommendedRamSize: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      minimalRamSize: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      recommendedCpuId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cpus',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      recommendedGpuId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'gpus',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      minimalCpuId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cpus',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      minimalGpuId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'gpus',
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
    await queryInterface.dropTable('games');
  },
};
