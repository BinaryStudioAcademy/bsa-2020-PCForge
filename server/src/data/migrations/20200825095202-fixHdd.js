'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('setups', 'hhdId', 'hddId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('setups', 'hddId', 'hhdId');
  }
};
