'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('addRequests', 'requestedHardwareType', {
      allowNull: true,
      type: Sequelize.STRING(50),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('addRequests', 'requestedHardwareType', {
      allowNull: true,
      type: Sequelize.STRING(50),
    });
  },
};
