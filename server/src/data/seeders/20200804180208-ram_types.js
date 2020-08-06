'use strict';

const ramTypes = require('../seed-data/ram_types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert(
        'ramTypes',
        ramTypes.map((ramType) => {
          return {
            ...ramType,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          };
        }),
        {}
      );
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('ramTypes', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
