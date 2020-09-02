'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ssds', 'capacity', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('hdds', 'capacity', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('ssds', 'capacity', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
    await queryInterface.changeColumn('hdds', 'capacity', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
  },
};
