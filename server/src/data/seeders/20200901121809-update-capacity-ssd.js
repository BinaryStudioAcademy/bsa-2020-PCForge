'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [ssds] = await queryInterface.sequelize.query('SELECT * FROM "ssds"');
    try {
      for (const ssd of ssds) {
        await queryInterface.bulkUpdate(
          'ssds',
          {
            capacity: parseInt(ssd.capacity),
          },
          {
            id: ssd.id,
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
