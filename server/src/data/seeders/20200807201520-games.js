'use strict';

const games = require('../seed-data/games.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const gamesToSeed = [];
    try {
      for (const game of games) {
        const minimalGpuId = await queryInterface.rawSelect(
          'gpus',
          {
            where: {
              name: game.minimal_gpu
            }
          },
          ['id']
        );

        const recommendedGpuId = await queryInterface.rawSelect(
          'gpus',
          {
            where: {
              name: game.recommended_gpu
            }
          },
          ['id']
        );

        const minimalCpuId = await queryInterface.rawSelect(
          'cpus',
          {
            where: {
              name: game.minimal_cpu
            }
          },
          ['id']
        );

        const recommendedCpuId = await queryInterface.rawSelect(
          'cpus',
          {
            where: {
              name: game.recommended_cpu
            }
          },
          ['id']
        );

        if (
          minimalGpuId &&
          recommendedGpuId &&
          minimalCpuId &&
          recommendedCpuId
        ) {
          gamesToSeed.push(({
            name: game.name,
            description: game.description,
            year: game.year,
            image: game.image,
            minimalRamSize: game.minimal_ram_size,
            recommendedRamSize: game.recommended_ram_size,
            recommendedCpuId,
            recommendedGpuId,
            minimalCpuId,
            minimalGpuId,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }))
        } else {
          console.error(recommendedCpuId,
          recommendedGpuId,
          minimalCpuId,
          minimalGpuId)
        }
      }
      await queryInterface.bulkInsert('games', gamesToSeed, {});
    } catch(err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('games', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
