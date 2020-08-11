'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('setups', 'description', {
      type: Sequelize.STRING(500),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('setups', 'description', {
      type: Sequelize.STRING(500),
    });
  },
};
