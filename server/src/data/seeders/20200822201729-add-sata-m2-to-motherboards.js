'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const ddr4 = await queryInterface.rawSelect(
    //   'motherboards',
    //   {
    //     where: {
    //       ramTypeId: 1,
    //     },
    //   },
    //   'id'
    // );
    const [ddr4] = await queryInterface.sequelize.query(
      'SELECT * FROM "motherboards" WHERE "motherboards"."ramTypeId" = 1'
    );
    const idM2 = ddr4.map((mb) => mb.id).filter(() => Math.random() < 0.3);

    try {
      await queryInterface.bulkUpdate(
        'motherboards',
        {
          sata: 3,
          m2: false,
        },
        {
          ramTypeId: 1,
        }
      );
      await queryInterface.bulkUpdate(
        'motherboards',
        {
          sata: 3,
          m2: true,
        },
        {
          ramTypeId: 1,
          id: idM2,
        }
      );
      await queryInterface.bulkUpdate(
        'motherboards',
        {
          sata: 3,
          m2: false,
        },
        {
          ramTypeId: 2,
        }
      );
      await queryInterface.bulkUpdate(
        'motherboards',
        {
          sata: 2,
          m2: false,
        },
        {
          ramTypeId: 3,
        }
      );
      await queryInterface.bulkUpdate(
        'motherboards',
        {
          sata: 1,
          m2: false,
        },
        {
          ramTypeId: 4,
        }
      );
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
