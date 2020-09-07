'use strict';
const bcrypt = require('bcrypt');

function getRandomElement(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const cpus = (await queryInterface.sequelize.query('SELECT id FROM "cpus"'))[0].map((obj) => obj.id);
      const gpus = (await queryInterface.sequelize.query('SELECT id FROM "gpus"'))[0].map((obj) => obj.id);
      const motherboards = (await queryInterface.sequelize.query('SELECT id FROM "motherboards"'))[0].map(
        (obj) => obj.id
      );
      const rams = (await queryInterface.sequelize.query('SELECT id FROM "rams"'))[0].map((obj) => obj.id);
      const powerSupplies = (await queryInterface.sequelize.query('SELECT id FROM "powerSupplies"'))[0].map(
        (obj) => obj.id
      );
      if (!(cpus.length || gpus.length || motherboards.length || rams.length || powerSupplies.length)) {
        return;
      }
      let users = (await queryInterface.sequelize.query('SELECT id FROM "users"'))[0].map((obj) => obj.id);
      if (users.length === 0) {
        const userData = {
          email: 'admin@pcforge.com',
          password: bcrypt.hashSync('bsa2020', 10),
          isAdmin: true,
        };
        await queryInterface.bulkInsert([userData]);
        users = (await queryInterface.sequelize.query('SELECT id FROM "users"'))[0].map((obj) => obj.id);
      }

      const setups = [];

      for (let i = 0; i < 6; i++) {
        setups.push({
          title: 'My awesome setup',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          image: 'https://www.pcgamesn.com/wp-content/uploads/2020/01/asa_pc_specialist-900x506.jpg',
          authorId: getRandomElement(users),
          cpuId: getRandomElement(cpus),
          motherboardId: getRandomElement(motherboards),
          gpuId: getRandomElement(gpus),
          ramId: getRandomElement(rams),
          powerSupplyId: getRandomElement(powerSupplies),
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        });
      }
      await queryInterface.bulkInsert('setups', setups, {});
    } catch (e) {
      console.log('Seeding setups error: ', e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('setups', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
