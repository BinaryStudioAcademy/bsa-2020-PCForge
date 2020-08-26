'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [motherboards] = await queryInterface.sequelize.query('SELECT * FROM "motherboards"');
    try {
      for (const motherboard of motherboards) {
        const ramType = await queryInterface.rawSelect(
          'ramTypes',
          {
            where: {
              id: motherboard.ramTypeId,
            },
          },
          ['name']
        );
        await queryInterface.bulkUpdate(
          'motherboards',
          {
            sata: ramType === ('DDR4' || 'DDR3') ? 3 : ramType === 'DDR2' ? 2 : 1,
            m2: ramType === 'DDR4' ? Math.random() < 0.3 : false,
          },
          {
            id: motherboard.id,
          }
        );
      }
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkUpdate(
        'motherboards',
        {
          sata: null,
          m2: null,
        },
        {}
      );
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
