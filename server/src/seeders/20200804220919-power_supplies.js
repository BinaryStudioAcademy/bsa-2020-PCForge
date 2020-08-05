'use strict';

const powerSupplies = require("../seed-data/power_supplies");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert('powerSupplies', powerSupplies.map(item => {
        return {
          ...item,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        }
      }), {});
    }
    catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('powerSupplies', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  }
};
