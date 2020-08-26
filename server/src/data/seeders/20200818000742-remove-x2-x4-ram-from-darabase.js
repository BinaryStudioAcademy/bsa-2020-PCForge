'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    try {
      await queryInterface.bulkDelete('rams', { name: { [Op.regexp]: `2x` } }, {});
      await queryInterface.bulkDelete('rams', { name: { [Op.regexp]: `4x` } }, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
  down: async (queryInterface, Sequelize) => {
    /* eslint-disable */
  },
};
