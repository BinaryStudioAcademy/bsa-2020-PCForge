'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return await queryInterface.bulkInsert(
        'users',
        [
          {
            name: 'admin',
            password: '$2b$10$oDZ2157.IsmBbtQrj4/txO578BNA60KUKHLJdpbmvylLKDVCq6u.e',
            email: 'admin@pcforge.com',
            isAdmin: true,
            avatar: '',
            verifyEmailToken: '',
            resetPasswordToken: '',
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          },
        ],
        {}
      );
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /* eslint-disable */
  },
};
