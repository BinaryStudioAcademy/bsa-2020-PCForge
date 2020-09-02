'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE games
      SET "minimalRamSize" = 1
      WHERE "minimalRamSize" = 0
    `);
    await queryInterface.sequelize.query(`
      UPDATE games
      SET "recommendedRamSize" = 1
      WHERE "recommendedRamSize" = 0
    `);
  },

  down: async (queryInterface, Sequelize) => {
    //do nothing
  },
};
