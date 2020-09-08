'use strict';
const { ElasticService } = require('../../api/services/elsticsearch.service');

module.exports = {
  up: async (queryInterface) => {
    try {
      const [cpus] = await queryInterface.sequelize.query('SELECT * FROM "cpus"');
      const [games] = await queryInterface.sequelize.query('SELECT * FROM "games"');
      const [gpus] = await queryInterface.sequelize.query('SELECT * FROM "gpus"');
      const [hdds] = await queryInterface.sequelize.query('SELECT * FROM "hdds"');
      const [motherboards] = await queryInterface.sequelize.query('SELECT * FROM "motherboads"');
      const [news] = await queryInterface.sequelize.query('SELECT * FROM "news"');
      const [powersupplies] = await queryInterface.sequelize.query('SELECT * FROM "powerSupplies"');
      const [rams] = await queryInterface.sequelize.query('SELECT * FROM "rams"');
      const [setups] = await queryInterface.sequelize.query('SELECT * FROM "setups"');
      const [ssds] = await queryInterface.sequelize.query('SELECT * FROM "ssds"');

      const cpusElasticInstance = new ElasticService('cpus');
      const gamesElasticInstance = new ElasticService('games');
      const gpusElasticInstance = new ElasticService('gpus');
      const hddsElasticInstance = new ElasticService('hdds');
      const motherboardsElasticInstance = new ElasticService('motherboards');
      const newsElasticInstance = new ElasticService('news');
      const powersuppliesElasticInstance = new ElasticService('powersupplies');
      const ramsElasticInstance = new ElasticService('rams');
      const setupsElasticInstance = new ElasticService('setups');
      const ssdsElasticInstance = new ElasticService('ssds');

      await cpusElasticInstance.deleteIndexIfExist('cpus');
      await gamesElasticInstance.deleteIndexIfExist('games');
      await gpusElasticInstance.deleteIndexIfExist('gpus');
      await hddsElasticInstance.deleteIndexIfExist('hdds');
      await motherboardsElasticInstance.deleteIndexIfExist('motherboards');
      await newsElasticInstance.deleteIndexIfExist('news');
      await powersuppliesElasticInstance.deleteIndexIfExist('powersupplies');
      await ramsElasticInstance.deleteIndexIfExist('rams');
      await setupsElasticInstance.deleteIndexIfExist('setups');
      await ssdsElasticInstance.deleteIndexIfExist('ssds');

      await cpusElasticInstance.createIndexIfNotExist('cpus');
      await gamesElasticInstance.createIndexIfNotExist('games');
      await gpusElasticInstance.createIndexIfNotExist('gpus');
      await hddsElasticInstance.createIndexIfNotExist('hdds');
      await motherboardsElasticInstance.createIndexIfNotExist('motherboards');
      await newsElasticInstance.createIndexIfNotExist('news');
      await powersuppliesElasticInstance.createIndexIfNotExist('powersupplies');
      await ramsElasticInstance.createIndexIfNotExist('rams');
      await setupsElasticInstance.createIndexIfNotExist('setups');
      await ssdsElasticInstance.createIndexIfNotExist('ssds');

      await cpusElasticInstance.bulk(cpus);
      await gamesElasticInstance.bulk(games);
      await gpusElasticInstance.bulk(gpus);
      await hddsElasticInstance.bulk(hdds);
      await motherboardsElasticInstance.bulk(motherboards);
      await newsElasticInstance.bulk(news);
      await powersuppliesElasticInstance.bulk(powersupplies);
      await ramsElasticInstance.bulk(rams);
      await setupsElasticInstance.bulk(setups);
      await ssdsElasticInstance.bulk(ssds);
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface) => {
    try {
      console.log(`UnSeeding`);
    } catch (err) {
      console.log(`UnSeeding error: ${err}`);
    }
  },
};
