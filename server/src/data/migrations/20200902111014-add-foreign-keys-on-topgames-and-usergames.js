'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('userGames', ['gameId'], {
      type: 'FOREIGN KEY',
      name: 'FK_userGames_to_games',
      references: {
        table: 'games',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    queryInterface.addConstraint('topGames', ['gameId'], {
      type: 'FOREIGN KEY',
      name: 'FK_topGames_to_games',
      references: {
        table: 'games',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('userGames', 'FK_userGames_to_games');
    queryInterface.removeConstraint('topGames', 'FK_topGames_to_games');
  },
};
