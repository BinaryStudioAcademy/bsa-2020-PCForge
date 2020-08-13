'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('comments', 'value', {
          allowNull: false,
          type: Sequelize.DataTypes.TEXT
        }, { transaction: t }),
        queryInterface.addColumn('rates', 'value', {
          allowNull: false,
          type: Sequelize.DataTypes.FLOAT,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('comments', 'value', { transaction: t }),
        queryInterface.removeColumn('rates', 'value', { transaction: t })
      ]);
    });
  }
};
