'use strict';

const sockets = require("../seed-data/sockets");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert('sockets', sockets.map(socket => {
        return {
          ...socket,
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
      await queryInterface.bulkDelete('sockets', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  }
};


