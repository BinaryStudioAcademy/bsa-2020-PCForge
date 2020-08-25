'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('cpus', 'tdp', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
    await queryInterface.changeColumn('gpus', 'tdp', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('cpus', 'tdp', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('gpus', 'tdp', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
  }
};
