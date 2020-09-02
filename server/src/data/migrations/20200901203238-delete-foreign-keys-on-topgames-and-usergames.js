'use strict';

const getForeignKeyNames = async (tableName, columnName, position, opts) => {
  let sqlz = opts.queryInterface.sequelize;
  let sql = `
        SELECT CONSTRAINT_NAME
        FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
        WHERE POSITION_IN_UNIQUE_CONSTRAINT = '${position}'
          AND TABLE_NAME = '${tableName}'
          AND COLUMN_NAME = '${columnName}'
    `;

  return sqlz.query(sql, { type: sqlz.QueryTypes.SELECT }).then((result) => {
    return result;
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userGamesFks = await getForeignKeyNames('userGames', 'gameId', 1, { queryInterface });

    userGamesFks &&
      userGamesFks.forEach((fk) => {
        queryInterface.removeConstraint('userGames', fk.constraint_name);
      });

    const topGamesFks = await getForeignKeyNames('topGames', 'gameId', 1, { queryInterface });

    topGamesFks &&
      topGamesFks.forEach((fk) => {
        queryInterface.removeConstraint('topGames', fk.constraint_name);
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * How to revert it..?
     */
  },
};
