'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeConstraint('setups', 'setups_authorId_fkey');
    await queryInterface.removeConstraint('setups', 'setups_authorId_fkey1');
    await queryInterface.removeConstraint('setups', 'setups_authorId_fkey2');
    await queryInterface.addConstraint('setups', {
      type: 'foreign key',
      name: 'setups_authorId_fkey',
      fields: ['authorId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.removeConstraint('userGames', 'userGames_userId_fkey');
    await queryInterface.removeConstraint('userGames', 'userGames_userId_fkey1');
    await queryInterface.removeConstraint('userGames', 'userGames_userId_fkey2');
    await queryInterface.addConstraint('userGames', {
      type: 'foreign key',
      name: 'userGames_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.removeConstraint('addRequests', 'addRequests_userId_fkey');
    await queryInterface.addConstraint('addRequests', {
      type: 'foreign key',
      name: 'addRequests_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryInterface.removeConstraint('comments', 'comments_userId_fkey');
    await queryInterface.removeConstraint('comments', 'comments_userId_fkey1');
    await queryInterface.addConstraint('comments', {
      type: 'foreign key',
      name: 'comments_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('setups', 'setups_authorId_fkey');

    await queryInterface.addConstraint('setups', {
      type: 'foreign key',
      name: 'setups_authorId_fkey',
      fields: ['authorId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addConstraint('setups', {
      type: 'foreign key',
      name: 'setups_authorId_fkey1',
      fields: ['authorId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addConstraint('setups', {
      type: 'foreign key',
      name: 'setups_authorId_fkey2',
      fields: ['authorId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.removeConstraint('userGames', 'userGames_userId_fkey');
    await queryInterface.addConstraint('userGames', {
      type: 'foreign key',
      name: 'userGames_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addConstraint('userGames', {
      type: 'foreign key',
      name: 'userGames_userId_fkey1',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addConstraint('userGames', {
      type: 'foreign key',
      name: 'userGames_userId_fkey2',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.removeConstraint('addRequests', 'addRequests_userId_fkey');
    await queryInterface.addConstraint('addRequests', {
      type: 'foreign key',
      name: 'addRequests_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.removeConstraint('comments', 'comments_userId_fkey');
    await queryInterface.addConstraint('comments', {
      type: 'foreign key',
      name: 'comments_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
    await queryInterface.addConstraint('comments', {
      type: 'foreign key',
      name: 'comments_userId_fkey1',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },
};
