'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [hdds] = await queryInterface.sequelize.query('SELECT * FROM "hdds"');
    try {
      for (const hdd of hdds) {
        await queryInterface.bulkUpdate(
          'hdds',
          {
            capacity: parseInt(hdd.capacity),
          },
          {
            id: hdd.id,
          }
        );
      }
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    console.log();
  },
};
