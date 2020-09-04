'use strict';

const news = require('../seed-data/news');

module.exports = {
  up: async (queryInterface) => {
    try {
      return await queryInterface.bulkInsert(
        'news',
        news.map((article) => {
          return {
            ...article,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          };
        }),
        {}
      );
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface) => {
    try {
      await queryInterface.bulkDelete('news', null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },
};
