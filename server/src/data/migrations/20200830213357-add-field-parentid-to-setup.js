'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('setups', 'parentId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'setups',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('setups', 'hhdId');
  },
};
