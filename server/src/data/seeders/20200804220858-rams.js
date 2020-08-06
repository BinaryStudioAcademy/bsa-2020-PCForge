'use strict';

const rams = require('../seed-data/rams');
console.log('rams', rams);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ramsToSeed = [];
    try {
      for (const ram of rams) {
        const ramTypeId = await queryInterface.rawSelect(
          `ramTypes`,
          {
            where: {
              name: ram.type,
            },
          },
          ['id']
        );

        if (ramTypeId) {
          ramsToSeed.push({
            name: ram.name,
            memorySize: ram.memorySize,
            frequency: ram.frequency,
            power: ram.power,
            typeId: ramTypeId,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          });
        }
      }

      await queryInterface.bulkInsert('rams', ramsToSeed, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('rams', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
