'use strict';

const cpus = require("../seed-data/cpus");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newCpus = []
    try {
      for (const cpu of cpus) {
        console.log("cpu", cpu)
        const socketId = await queryInterface.rawSelect(`sockets`, {
          where: {
            name: cpu.socket,
          },
        }, ['id']);
        console.log("socket", socket)

        if (socket) {
          newCpus.push({
            name: cpu.name,
            performance: cpu.performance,
            class: cpu.class,
            clockspeed: cpu.clockspeed,
            cores: cpu.cores,
            tdp: cpu.tdp,
            socketId,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now())
          })
        }
      }

      await queryInterface.bulkInsert('cpus', newCpus, {});
    }
    catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('cpus', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  }
};
