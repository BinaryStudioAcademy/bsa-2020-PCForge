'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rams', {
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
      memorySize: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      frequency: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      power: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ramTypes',
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
    await queryInterface.dropTable('rams');
  },
};
