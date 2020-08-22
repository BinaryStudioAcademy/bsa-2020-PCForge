'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.changeColumn('cpus', 'tdp', {
              allowNull: false,
              type: Sequelize.FLOAT
            }));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(queryInterface.changeColumn('gpus', 'tdp', {
              allowNull: false,
              type: Sequelize.FLOAT
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.changeColumn('cpus', 'tdp', {
              allowNull: false,
              type: Sequelize.INTEGER
            }));

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap(queryInterface.changeColumn('gpus', 'tdp', {
              allowNull: false,
              type: Sequelize.INTEGER
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};