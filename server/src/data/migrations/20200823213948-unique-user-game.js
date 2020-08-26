'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('userGames', ['userId', 'gameId'], {
      type: 'unique',
      name: 'user_game_uniqueness',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('userGames', 'user_game_uniqueness');
  },
};
