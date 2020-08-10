'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('games', 'image', {
      type: Sequelize.STRING(120),
      allowNull: false,
    });
    await queryInterface.changeColumn('games', 'name', {
      type: Sequelize.STRING(120),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('games', 'image', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
    await queryInterface.changeColumn('games', 'name', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  },
};
