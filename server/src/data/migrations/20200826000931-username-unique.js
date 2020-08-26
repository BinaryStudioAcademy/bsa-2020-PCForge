'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'name', {
      allowNull: true,
      unique: true,
      type: Sequelize.STRING(50),
    });

    await queryInterface.changeColumn('users', 'email', {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(50),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'name', {
      allowNull: true,
      unique: false,
      type: Sequelize.STRING(50),
    });

    await queryInterface.changeColumn('users', 'email', {
      allowNull: false,
      unique: false,
      type: Sequelize.STRING(50),
    });
  },
};
