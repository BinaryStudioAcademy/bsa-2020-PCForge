'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('userGames', 'gameId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'games',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.changeColumn('topGames', 'gameId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'games',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('userGames', 'gameId', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('topGames', 'gameId', {
      type: Sequelize.INTEGER,
    });
  },
};
