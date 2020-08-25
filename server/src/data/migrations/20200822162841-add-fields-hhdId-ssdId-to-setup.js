'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('setups', 'hhdId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'hdds',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('setups', 'ssdId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'ssds',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('setups', 'hddId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'hdds',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.removeColumn('setups', 'ssdId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'ssds',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
};
