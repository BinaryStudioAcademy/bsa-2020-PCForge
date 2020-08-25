'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('motherboards', 'sata', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('motherboards', 'm2', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('motherboards', 'sata', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.removeColumn('motherboards', 'm2', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });
  },
};
