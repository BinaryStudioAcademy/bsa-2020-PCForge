'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public', { raw: true });
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.CITEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING(50),
    });
    await queryInterface.sequelize.query('DROP EXTENSION IF EXISTS citext', { raw: true });
  },
};
