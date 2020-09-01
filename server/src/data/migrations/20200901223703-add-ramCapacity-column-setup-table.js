'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('setups', 'ramCapacity', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('setups', 'ramCapacity');
  },
};
