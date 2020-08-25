'use strict';

const hdds = require('../seed-data/hdds');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert(
        'hdds',
        hdds.map((item) => {
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
      await queryInterface.bulkDelete('hdds', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
