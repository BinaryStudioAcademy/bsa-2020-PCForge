'use strict';

const motherboards = require('../seed-data/motherboards');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const motherboardsToSeed = [];
    try {
      for (const motherboard of motherboards) {
        const socketId = await queryInterface.rawSelect(
          `sockets`,
          {
            where: {
              name: motherboard.socket,
            },
          },
          ['id']
        );

        const ramTypeId = await queryInterface.rawSelect(
          `ramTypes`,
          {
            where: {
              name: motherboard.ram,
            },
          },
          ['id']
        );

        if (socketId && ramTypeId) {
          motherboardsToSeed.push({
            name: motherboard.name,
            socketId,
            ramTypeId,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          });
        }
      }

      await queryInterface.bulkInsert('motherboards', motherboardsToSeed, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('motherboards', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
