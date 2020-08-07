/* eslint-disable no-undef */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('rams', 'typeId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ramTypes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('cpus', 'socketId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'sockets',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('motherboards', 'socketId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'sockets',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('motherboards', 'ramTypeId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ramTypes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'recommendedCpuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'recommendedGpuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'gpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'minimalCpuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'minimalGpuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'gpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('userGames', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('userGames', 'gameId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'games',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'authorId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'cpuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'gpuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'gpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'motherboardId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'motherboards',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'ramId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'rams',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'powerSupplyId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'powerSupplies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('comments', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('rates', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('rams', 'typeId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'ramTypes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('cpus', 'socketId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'sockets',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('motherboards', 'socketId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'sockets',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('motherboards', 'ramTypeId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'ramTypes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'recommendedCpuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'cpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'recommendedGpuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'gpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'minimalCpuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'cpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('games', 'minimalGpuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'gpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('userGames', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('userGames', 'gameId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'games',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'authorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'cpuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'cpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'gpuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'gpus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'motherboardId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'motherboards',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'ramId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'rams',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('setups', 'powerSupplyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'powerSupplies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('comments', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.changeColumn('rates', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
};
