'use strict';

const gpus = require('../seed-data/gpus');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert(
        'gpus',
        gpus.map((gpu) => {
          return {
            ...gpu,
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
      await queryInterface.bulkDelete('gpus', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
