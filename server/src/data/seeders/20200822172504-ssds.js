'use strict';

const ssds = require('../seed-data/ssds');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert(
        'ssds',
        ssds.map((item) => {
          return {
            ...item,
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
      await queryInterface.bulkDelete('ssds', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
