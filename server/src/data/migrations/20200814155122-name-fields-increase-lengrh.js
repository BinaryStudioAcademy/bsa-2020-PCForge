'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('cpus', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('gpus', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('gpus', 'interface', {
          type: Sequelize.STRING(150),
          allowNull: true,
        }),
        queryInterface.changeColumn('gpus', 'opengl', {
          type: Sequelize.STRING(150),
          allowNull: true,
        }),
        queryInterface.changeColumn('motherboards', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('powerSupplies', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('ramTypes', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('rams', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('sockets', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('games', 'name', {
          type: Sequelize.STRING(150),
          allowNull: false,
        }),
        queryInterface.changeColumn('games', 'image', {
          type: Sequelize.STRING(200),
          allowNull: false,
        }),
        queryInterface.changeColumn('users', 'name', {
          type: Sequelize.STRING(150),
          allowNull: true,
        }),
        queryInterface.changeColumn('users', 'avatar', {
          type: Sequelize.STRING(200),
          allowNull: true,
        }),
        queryInterface.changeColumn('news', 'title', {
          type: Sequelize.STRING(200),
          allowNull: false,
        }),
        queryInterface.changeColumn('news', 'image', {
          type: Sequelize.STRING(200),
          allowNull: false,
        }),
        queryInterface.changeColumn('setups', 'title', {
          type: Sequelize.STRING(200),
          allowNull: false,
        }),
        queryInterface.changeColumn('setups', 'image', {
          type: Sequelize.STRING(200),
          allowNull: false,
        }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('cpus', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('gpus', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('gpus', 'interface', {
          type: Sequelize.STRING(50),
          allowNull: true,
        }),
        queryInterface.changeColumn('gpus', 'opengl', {
          type: Sequelize.STRING(50),
          allowNull: true,
        }),
        queryInterface.changeColumn('motherboards', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('powerSupplies', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('ramTypes', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('rams', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('sockets', 'name', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('games', 'name', {
          type: Sequelize.STRING(120),
          allowNull: false,
        }),
        queryInterface.changeColumn('games', 'image', {
          type: Sequelize.STRING(120),
          allowNull: false,
        }),
        queryInterface.changeColumn('users', 'name', {
          type: Sequelize.STRING(50),
          allowNull: true,
        }),
        queryInterface.changeColumn('users', 'avatar', {
          type: Sequelize.STRING(50),
          allowNull: true,
        }),
        queryInterface.changeColumn('news', 'title', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('news', 'image', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('setups', 'title', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
        queryInterface.changeColumn('setups', 'image', {
          type: Sequelize.STRING(50),
          allowNull: false,
        }),
      ]);
    });
  },
};
